import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/API/project.service';
// import { JobdetailsPopupComponent } from '../../job-management/jobdetails-popup/jobdetails-popup.component';
// import { ProjectlistPopupComponent } from '../../project-management/projectlist-popup/projectlist-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { InterviewDetailsService } from 'src/app/shared/services/API/interview-details.service';

@Component({
  selector: 'app-selected-rejected-talents',
  // standalone: true,
  // imports: [],
  templateUrl: './selected-rejected-talents.component.html',
  styleUrl: './selected-rejected-talents.component.scss'
})
export class SelectedRejectedTalentsComponent implements OnInit{

  pagedData: any[] = [];
  pageSize: number = 5; 
  currentPage: number = 1; 
  page=1;
  jobnameSearch:string='';
  projectnameSearch:string='';
  usernameSearch:string='';
  public _credentials: Credentials | null = null;
  isHeaderShow = false;
  tab1: boolean = true;
  tab2: boolean = false;
  talentlist: any;
  UserType: string | undefined;
  tab: string;
  userTypeDetailsModel: any = [];

  constructor(
    private interviewdetailsservice: InterviewDetailsService,
    private credentialsService: CredentialsService,
    private projectService: ProjectService,
    private modalService:NgbModal,
    private router: Router,
  ) {
    this._credentials = credentialsService.credentials;
    this.UserType = credentialsService.credentials?.UserTypeCode;
  }


  ngOnInit(): void {
    this.SelectedRejectedList({ target: { value: 'Selected' } });
  }
  onclickTab(value: string) {
    this.tab1 = value === 'Selected';
    this.tab2 = value === 'Rejected';
    this.SelectedRejectedList(value);
  }

  onStatusFilterChange(event: any) {
    const selectedStatus = event.target.value;
    let userid: any = this._credentials?.UserId;
    if(selectedStatus==1){
     this.interviewdetailsservice.GetSelectedInterviewDetailForClient(userid).subscribe((result: { Data: any; }) => {
              this.talentlist = result.Data;
        this.updatePage();

            });
        }
    else{
         this.interviewdetailsservice.GetRejectedInterviewDetailForClient(userid).subscribe((res: any) => {
          this.talentlist = res.Data;
        this.updatePage();

        });
    }
  }

  SelectedRejectedList(event: any) {
    let userid: any = this._credentials?.UserId;
    const tab: string = event.target.value;
    if (tab === 'Selected') {
      this.interviewdetailsservice.GetSelectedInterviewDetailForClient(userid).subscribe((result: { Data: any; }) => {
        this.talentlist = result.Data;
        this.updatePage();
      })
    } else if (tab === 'Rejected') {
      this.interviewdetailsservice.GetRejectedInterviewDetailForClient(userid).subscribe((res: any) => {
        this.talentlist = res.Data;
        this.updatePage();

      });
    }
  }
  refreshData() {
    // Reload the page
    this.SelectedRejectedList({ target: { value: 'Selected' } });
  }

  // EditnavigateDetail(Talentid?: any, RelTalProId?: number, Interview_Round_Id?: number) {
  //   if (Talentid) {
  //     if (this._credentials?.UserTypeCode == 'Client') {
  //       this.router.navigate(['/client/add-interview-schedule', Talentid], {
  //         queryParams: {
  //           relTalProId: RelTalProId,
  //           RoundId: Interview_Round_Id,
  //         }
  //       });
  //     }
  //   };
  // }
  // shortDescription(description: string, limit: number): string {
  //   if (description && description.length > limit) {
  //     return description.slice(0, limit) + '...';
  //   } else {
  //     return description;
  //   }
  // }

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
    // const modalRef = this.modalService.open(ProjectlistPopupComponent);
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
    if(this.talentlist && this.talentlist.length){
    this.pagedData = this.talentlist.slice(startIndex, endIndex);
  }
  else{
  this.pagedData= [];
  }
}

  getPageNumbers(): number[] {
  const totalPages = this.getTotalPages();
  return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  getTotalPages(): number {
    if(this.talentlist && this.talentlist.length ){
      return Math.ceil(this.talentlist.length / this.pageSize);
    }
    return 0;
  }
  onProjectSearchChange(){
    this.pagedData = this.talentlist.filter((item :any)=>
    item.ProjectName.toLowerCase().includes(this.projectnameSearch.toLowerCase())
  );
  }
  onJobSearchChange(){
    this.pagedData = this.talentlist.filter((item :any)=>
    item.JobTitle.toLowerCase().includes(this.jobnameSearch.toLowerCase())
  );
  }
  onUserSearchChange(){
    this.pagedData = this.talentlist.filter((item :any)=>
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

