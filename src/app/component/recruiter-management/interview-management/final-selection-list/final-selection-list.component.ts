import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CommonService } from 'src/app/shared/services/API/common.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { InterviewDetailsService } from 'src/app/shared/services/API/interview-details.service';
import { ProjectService } from 'src/app/shared/services/API/project.service';
import { TalentService } from 'src/app/shared/services/API/talent.service';
// import Swal from 'sweetalert2';import { JobdetailsPopupComponent } from '../../job-management/jobdetails-popup/jobdetails-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
// import { ProjectlistPopupComponent } from '../../project-management/projectlist-popup/projectlist-popup.component';

@Component({
  selector: 'app-final-selection-list',
  // standalone: true,
  // imports: [],
  templateUrl: './final-selection-list.component.html',
  styleUrl: './final-selection-list.component.scss'
})
export class FinalSelectionListComponent {

  
  pagedData: any[] = [];
  pageSize: number = 5; 
  currentPage: number = 1; 
  page=1;
  jobnameSearch:string='';
  projectnameSearch:string='';
  usernameSearch:string='';
  userTypeDetailsModel: any = [];
  jobDetailsList: any;
  public interviewlist: any;
  temProjectID: number = 0;
  selectedProject: number = 0;
  selectedJob: number = 0;
  selectedTalent: number = 0;

  constructor(
    private projectService: ProjectService,
    private credentialsService: CredentialsService,
    private router: Router,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private talentService: TalentService,
    private talentservice: TalentService,
    private interviewservice: InterviewDetailsService, private modalService:NgbModal
  ) {
    if (this.route.snapshot.params['Projectid']) {
      this.ssaveProjectModel.ProjectId = parseInt(this.route.snapshot.params['Projectid'].toString());
    }
    this._credentials = this.credentialsService.credentials;
  }
  public _credentials: any = null;
  agencyalltalentlist: any[] = [];
  projectList: any[] = [];
  ssaveProjectModel: any = {
    JobsId: 0,
    JobTitle: '',
    JobDescription: '',
    ProjectId: 0,
    ProjectDurationId: 0,
    PrimaryRoleId: 0,
    ExperienceId: 0,
    SkillId: 0,
    SkillName: '',
    JobTypeId: '',
    JobType: '',
    LocationId: '',
    LocationName: '',
    ContractTypeId: 0,
    DurationInMonth: '',
    Freelancer_HourlyRate: 0,
    Permanent_BaseSalary: 0,
    ProjectName: '',
    ProjectLogo: '',
    _ProjectLogo: [] as File[] | null,
    UploadFiles: '',
    //   _ProjectUploadFiles: [] as File[] | null,
    ProjectStartDate: null,
    ProjectEndDate: null,
    InterviewID: 0,
    cloanings: [{ PrimarySkillId: '', TeamSizeId: '', Permanent_BaseSalary: '' }],
    Interviewer_Name: '',
    Interviewer_Contact_Number: 0,
    IndustryTypeTitle: '',
    Interview_Description: '',
    Interview_Time: '',
    NewPreferTime: '',
    NewPreferDate: '',
    Interviewer_Email: '',
    Interview_Date: '',
    ProjectDescription: '',
    ProjectDurationType: '',
    PrimaryRoleTitle: '',
    ExperienceName: '',
    TeamSizeType: '',
    ContractTypeTitle: '',
    SecondarySkillId: '',
    JobsRate: 0,
    ClientName: '',
    TotalApplied: 0,
    LinkedinURL: '',
    IndustryTypeId: 0,
    CommunicationSkill: '',
    PrimarySkillName: '',
    SecondarySkillName: '',
    CurrencyType: '$',
    JobDocuments: [] as File[] | null,
    IsActive: '',
    CreatedBy: '',
    CreatedDate: '',
    _JobUploadFiles: [] as File[] | null,
  }
  AllDropdownData: any = {
    ContractTypes: [],
    PrimaryRoles: [],
    CompanySize: [],
    Experiences: [],
    IndustryTypes: [],
    JobType: [],
    Location: [],
    ProjectDurations: [],
    TeamSizes: [],
    ProjetStatus: []
  };

  talentId: number;
  jobsId: number;

  ngOnInit(): void {
    debugger
    this.getProjectsOfUSer();
    this.GetAllJobDetailsList();
    this.GetTalentRelationList();
    const talentId = this.selectedTalent;
    const userId = this.selectedProject;
    const jobsId = this.selectedJob;
    this.getAllInterviewDetailforTalent();
  }

  onProjectChange(selectedId: number, type: string) {
    debugger
    switch (type) {
      case 'Project':
        this.selectedProject = selectedId;
        break;
      case 'Job':
        this.jobsId = selectedId;
        break;
      case 'Talent':
        this.talentId = selectedId;
        break;
      default:
        break;
    }
    this.getAllInterviewDetailforTalent();
  }

  getAllInterviewDetailforTalent() {
    
    let UserId: any = this._credentials?.UserId;
    this.interviewservice.getAllInterviewDetailforTalent(this.talentId, UserId, this.jobsId).subscribe(
      (response) => {
        if (response.Data !== null && response.Data !== undefined) {
          this.interviewlist = response.Data;
          this.updatePage();
        }
        console.log(response);
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );
  }
  TalentFinalSelection() {
    let ProjectId = this.interviewlist && this.interviewlist[0].ProjectId;
    let Rel_Tal_Pro_Id = this.interviewlist && this.interviewlist[0].Rel_Tal_Pro_Id;
    const interviewModel: any = {
      TalentId: this.selectedTalent,
      JobsId: this.selectedJob,
      ProjectId: ProjectId,
      UserId: this._credentials.UserId,
      InterviewID: this.interviewlist.InterviewID,
      IsAdminApproved: true,
      Rel_Tal_Pro_Id: Rel_Tal_Pro_Id,
    }
    const timesheet$ = this.interviewservice.TalentFinalSelection(interviewModel).subscribe((res) => {
      // Handle success response
      if (res) {
        if (res.Success) {
          Swal.fire({
            html: res.Message,
            icon: 'success',
            buttonsStyling: false,
            confirmButtonText: 'Ok, got it!',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
          }).then((result) => {
            if (result.isConfirmed) {
             this.router.navigate(['/client/client-alltalentlist']);
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
      }
    },
    (error) => {
      // Handle error
      console.error(error);
    }
    );
  }

  TalentFinalReJection() {
    let ProjectId = this.interviewlist[0].ProjectId;
    let Rel_Tal_Pro_Id = this.interviewlist[0].Rel_Tal_Pro_Id;
    const interviewModel: any = {
      TalentId: this.selectedTalent,
      JobsId: this.selectedJob,
      ProjectId: ProjectId,
      UserId: this._credentials.UserId,
      InterviewID: this.interviewlist.InterviewID,
      CreatedBy: this._credentials.CreatedBy,
      IsAdminApproved: false,
      Rel_Tal_Pro_Id: Rel_Tal_Pro_Id,
    }
    const timesheet$ = this.interviewservice.TalentFinalReJection(interviewModel).subscribe((res) => {
      // Handle success response
      if (res) {
        if (res.Success) {
          Swal.fire({
            html: res.Message,
            icon: 'success',
            buttonsStyling: false,
            confirmButtonText: 'Ok, got it!',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/client/final-Selection']);
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
      }
    },
    (error) => {
      // Handle error
      console.error(error);
    }
    );
  }


  getProjectsOfUSer() {
    let UserId: any = this._credentials?.UserId;
    this.projectService.GetProjectsByUser(UserId).subscribe((resp) => {
      if (resp.Data !== null && resp.Data !== undefined) {
        this.projectList = resp.Data;
      }
    });
  }

  GetAllDropdowns() {
    this.commonService.GetallDDLS().subscribe((resp) => {
      if (resp.Success) {
        if (resp.Data !== null && resp.Data !== undefined) {
          this.AllDropdownData = resp.Data;
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: resp.Message,
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
    });
  }
  GetAllJobDetailsList() {
    let email: any = this._credentials?.Email;
    this.projectService.GetAllProjectJobsList_ByUserType(email).subscribe((resp) => {
      if (resp.Data !== null && resp.Data !== undefined) {
        this.jobDetailsList = resp.Data;
      }
    });
  }

  GetTalentRelationList() {
    let UserId = this._credentials?.UserId;
    this.talentservice.GetTalentRelationDropdown(UserId).subscribe((result: any) => {
      this.agencyalltalentlist = result.Data;
    });
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
 
  onChange(selectedTalentId: any) {
    const ProjectIdandJobid = this.agencyalltalentlist.find((x: any) => x.TalentId == selectedTalentId);
  }
  updatePage() { 
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if(this.interviewlist && this.interviewlist.length){
    this.pagedData = this.interviewlist.slice(startIndex, endIndex);
  }
  else{
    this.pagedData =[];
  }
  }  
  getPageNumbers(): number[] {
  const totalPages = this.getTotalPages();
  return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  getTotalPages(): number {
    if(this.interviewlist && this.interviewlist.length){
      return Math.ceil(this.interviewlist.length / this.pageSize);
    }
    return 0;
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



