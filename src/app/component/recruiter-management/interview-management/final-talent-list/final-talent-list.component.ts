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
  selector: 'app-final-talent-list',
  // standalone: true,
  // imports: [],
  templateUrl: './final-talent-list.component.html',
  styleUrl: './final-talent-list.component.scss'
})
export class FinalTalentListComponent {

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

}
