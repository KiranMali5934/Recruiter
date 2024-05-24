import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, finalize } from 'rxjs';
import { InterviewSchedulePopupComponent } from '../interview-schedule-popup/interview-schedule-popup.component';
import { Logger } from 'src/app/shared/services/API/logger-service.service';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { InterviewDetailsService } from 'src/app/shared/services/API/interview-details.service';
import Swal from 'sweetalert2';
// import { JobdetailsPopupComponent } from '../../job-management/jobdetails-popup/jobdetails-popup.component';
// import { ProjectlistPopupComponent } from '../../project-management/projectlist-popup/projectlist-popup.component';
import { ProjectService } from 'src/app/shared/services/API/project.service';

const log = new Logger('Login');

@Component({
  selector: 'app-interview-schedule-list',
  // standalone: true,
  // imports: [],
  templateUrl: './interview-schedule-list.component.html',
  styleUrl: './interview-schedule-list.component.scss'
})
export class InterviewScheduleListComponent {

  interviewModel={
    InterviewId:0,
  }
  public interviewlist: any;
  public _credentials: Credentials | null = null;
  isHeaderShow = false;
  tab1: boolean = true;
  tab2: boolean = false;
  tab3: boolean = false;
  isLoading = false;
  pagedData: any[] = [];
  pageSize: number = 5; 
  currentPage: number = 1; 
  page=1;
  jobnameSearch:string='';
  projectnameSearch:string='';
  usernameSearch:string='';
  interviewmodel: any;
  messagecancel: string = '';
   messagenotdecided:string='';
  filterlist: { UserId: number; UserName: string; }[];
  userTypeDetailsModel: any;
  
  constructor(
    private modalService: NgbModal,
    private interviewdetailsservice: InterviewDetailsService,
    private credentialsService: CredentialsService,
    private router: Router,    private projectService: ProjectService,
  ) { this._credentials = credentialsService.credentials; }
    
     
  ngOnInit(): void {
    this.GetInterviewDetailsList({ target: { value: 'Pending' } });
  }
  PassInterviewValue(interviewid: number) {
    debugger
    if (this.interviewlist !== null) {
      const modalRef = this.modalService.open(InterviewSchedulePopupComponent ,{size:'xl'});
      modalRef.componentInstance.DataOf = this.interviewlist.filter((x: any) => x.InterviewID == interviewid);
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
}

  refreshData() {
    this.GetInterviewDetailsList({ target: { value: 'Pending' } });
  }

  GetInterviewDetailsList(event: any) {
    debugger
    let userid: any = this._credentials?.UserId;
    const tab: string = event.target.value;
    if (tab === 'Pending') {
      this.interviewdetailsservice.GetInterviewDetailForClient(userid).subscribe((result) => {
        this.interviewlist = result.Data;
        this.updatePage();
        if (result.Data[0].Cancel_It == true) {
          this.messagecancel = 'This interview is canceled.';
          if (result.Data[0].Not_Decide == true) {
            this.messagenotdecided = 'This interview decision is pending.';
           }
        }
        //this.rerender();     
      })
    } else if (tab === 'Confirm') {
      this.interviewdetailsservice.GetHRConfirmInterviewListById(userid).subscribe((res: any) => {
        this.interviewlist = res.Data;
        this.updatePage();

       // this.rerender();    
      });
    }
    else if (tab === 'New-Request') {
      this.interviewdetailsservice.GetNewInterviewDetailForClient(userid).subscribe((resp: any) => {
	  const result: any[] = resp.Data.map((x: any) => ({
          ...x,
          Interview_Date: x.NewPreferDate.split('T')[0],
          Interview_Time: x.NewPreferTime
		  })).filter((x: any) => x.Interview_Date !== '0001-01-01' && x.Interview_Time !== '00:00:00');
        this.interviewlist = result;
        this.updatePage();

      //  this.rerender();
        });
    }  
  }
  PassValue(Jobsid:number,Projectid:number) {     
    this.projectService.GetProjectJobById(Jobsid).subscribe((resp) => {
    this.userTypeDetailsModel = resp.Data;
    this.userTypeDetailsModel.ProjectId=Projectid;
    this.userTypeDetailsModel.JobId=Jobsid;
    // const modalRef = this.modalService.open(JobdetailsPopupComponent , { size: 'xl' });
    // modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
    // modalRef.result
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {

    //     console.log(error);
    //   });
  }
  )};

  PassValueProject(Projectid:number) {     

    this.projectService.GetProjectById(Projectid).subscribe((resp) => {
    this.userTypeDetailsModel = resp.Data;
    this.userTypeDetailsModel.ProjectId=Projectid;
    // const modalRef = this.modalService.open(ProjectlistPopupComponent,{size:'xl'});
    // modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
    // modalRef.result
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {

    //     console.log(error);
    //   });
  }
  )}; 
 
  onclickTab(value: any) {
    debugger
    this.tab1 = value === 'Pending';
    this.tab2 = value === 'Confirm';
    this.tab3 = value ==='New-Request';
    this.GetInterviewDetailsList(value);
  }
  ClientConfirmation(interviewid: number) {
    const interviewModel: any = {
      InterviewID: 0,
      IsClientApproved: true
    }
    interviewModel.InterviewID = interviewid;
    interviewModel.IsClientApproved = true
    const timesheet$ = this.interviewdetailsservice.ClientConfirmation(interviewModel)
    timesheet$
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res: any | undefined) => {
          if (res.Success) {
            log.debug(`${res?.Email} successfully register timesheet`);

            if (res.Success) {
              Swal.fire({
                text: res.Message,
                icon: 'success',
                buttonsStyling: false,
                confirmButtonText: 'Ok, got it!',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/client/final-talent']);
                }
              });
            } else {
              Swal.fire({
                title: 'Error!',
                text: res.Message,
                icon: 'error',
                confirmButtonText: 'Okay',
              });
            }
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Womething went wrong',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
          }
        },
        (error: any) => {
          log.debug(`register error: ${error}`);
        }
      );
  }
  FilterList() {
    debugger
    let UserId: any = this._credentials?.UserId;
    this.interviewdetailsservice.GetInterviewDetailForClient(UserId).subscribe((resp) => {
      this.filterlist = resp.Data;
    });
  }
  ClientCancel(InterviewId: number,Rel_Tal_Pro_Id:number) {
    debugger
    const interviewModel: any = {
      InterviewID: 0,
      Rel_Tal_Pro_Id:0,
      IsClientApproved: true
    }
    interviewModel.InterviewID = InterviewId;
    interviewModel.Cancel_It = true;
    interviewModel.Rel_Tal_Pro_Id=Rel_Tal_Pro_Id;
    const timesheet$ = this.interviewdetailsservice.ClientCancel(interviewModel)
    timesheet$
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res: any | undefined) => {
          if (res.Success) {
            Swal.fire({
              text: 'Are you sure want Cancel Interview?',
              icon: 'warning',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonText: 'Yes, Cancel it!',
              cancelButtonText: 'No, keep it',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-active-light',
              },
            }).then((result) => {
              if (result.value) {
                if (result.isConfirmed) {
                  this.router.navigate(['/client/interview-schedule-list']);
                  this.GetInterviewDetailsList('Pending');
                }
                else {
                  Swal.fire({
                    title: 'Error!',
                    text: res.Message,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                  });
                }
              }
              else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  text: 'Not Cancelled!.',
                  icon: 'error',
                  buttonsStyling: false,
                  confirmButtonText: 'Ok, got it!',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                  },
                });
              }
              else {
                Swal.fire({
                  title: 'Error!',
                  text: 'Womething went wrong',
                  icon: 'error',
                  confirmButtonText: 'Okay',
                });
              }
            },
              (error: any) => {
                log.debug(`register error: ${error}`);
              }
            );
          }
        }
      );
  }
  ClientNotDecide(InterviewId: number) {
    debugger
    const interviewModel: any = {
      InterviewID: 0,
      IsClientApproved: true
    }
    interviewModel.InterviewID = InterviewId;
    interviewModel.Not_Decide = true
    const timesheet$ = this.interviewdetailsservice.ClientNotDecide(interviewModel)
    timesheet$
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res: any | undefined) => {
          if (res.Success) {
            Swal.fire({
              text: 'Are you sure want Not Decide',
              icon: 'warning',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonText: 'Yes, Not Decide!',
              cancelButtonText: 'No, keep it',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-active-light',
              },
            }).then((result) => {
              if (result.value) {
                if (result.isConfirmed) {
                  this.router.navigate(['/client/interview-schedule-list']);
                  this.GetInterviewDetailsList('Confirm');
                }
                else {
                  Swal.fire({
                    title: 'Error!',
                    text: res.Message,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                  });
                }
              }
              else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  text: 'Not Cancelled!.',
                  icon: 'error',
                  buttonsStyling: false,
                  confirmButtonText: 'Ok, got it!',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                  },
                });
              }
              else {
                Swal.fire({
                  title: 'Error!',
                  text: 'Womething went wrong',
                  icon: 'error',
                  confirmButtonText: 'Okay',
                });
              }
            },
              (error: any) => {
                log.debug(`register error: ${error}`);
              }
            );
          }
        }
      );
  }

  updatePage() { 
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if(this.interviewlist && this.interviewlist.length !==0){
    this.pagedData = this.interviewlist.slice(startIndex, endIndex);
  }
  //this.pagedData =[];
}
  getPageNumbers(): number[] {
  const totalPages = this.getTotalPages();
  return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  getTotalPages(): number {
    if(this.interviewlist && this.interviewlist.length !==0){
      return Math.ceil(this.interviewlist.length / this.pageSize);
    }
    else{
      return 0;
    }
  }
  onProjectSearchChange(){
    this.pagedData = this.interviewlist.filter((item :any)=>
    item.ProjectName.toLowerCase().includes(this.projectnameSearch.toLowerCase())
  );
  }
  onJobSearchChange(){
    this.pagedData = this.interviewlist.filter((item :any)=>
    item.JobTitle.toLowerCase().includes(this.jobnameSearch.toLowerCase())
  );
  }
  onUserSearchChange(){
    this.pagedData = this.interviewlist.filter((item :any)=>
    item.UserName.toLowerCase().includes(this.usernameSearch.toLowerCase())
  );
  }
  changePageSize(pageSize: any) {
    this.pageSize = parseInt(pageSize.value);
    this.currentPage = 1
    this.updatePage();
  }
  
  pageChanged(page: number) {
    this.currentPage = page;
    this.updatePage();
  }
}



