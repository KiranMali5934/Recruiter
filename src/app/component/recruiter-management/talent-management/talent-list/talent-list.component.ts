import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { ProjectModel } from 'src/app/shared/model/project.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { DashboardService } from 'src/app/shared/services/API/dashboard.service';
import { JobService } from 'src/app/shared/services/API/job.service';
import { TalentService } from 'src/app/shared/services/API/talent.service';
import { ProjectService } from 'src/app/shared/services/API/project.service';
import { environment } from 'src/environment/environment';
import { RecruiterService } from 'src/app/shared/services/API/recruiter.service';

@Component({
  selector: 'app-talent-list',
  // standalone: true,
  // imports: [],
  templateUrl: './talent-list.component.html',
  styleUrl: './talent-list.component.scss'
})
export class TalentListComponent {
  ddSettings_Skill: IDropdownSettings = {};
  public _credentials: Credentials | null = null;
  UserType: any;
  serverFilePath = environment.serverFilePath;
  projectList: ProjectModel[] = [];
  agencyalltalentlist: any[] = [];
  filterlist: { ProjectId: number; ProjectName: string; }[];
  filteredTalentList: any[] = [];
  selectedProjectId: any = '';
  x: any[] = [];
  pagedData: any[] = [];
  pageSize: number = 5; 
  currentPage: number = 1; 
  page=1;
  jobnameSearch:string='';
  projectnameSearch:string='';
  usernameSearch:string='';
  userTypeDetailsModel = {
    ProjectId: 0,
    JobId: 0,
    Rel_Tal_Pro_Id: 0,
    FirstName: "",
    LastName: "",
    ExpertiseStr: "",
    Exprience: '',
    TotalExperienceYear: 0,
    TotalExperienceMonth: 0,
    DegreeTitle: "",
    UniversityName: "",
    Address1: "",
    Address2: "",
    IsApplied: false,
    IsApproved: false,
    IsAdminApproved: false,
    createdBy: "",
    IsActive: false,
    ProfilePicPath: "",
    UserTypeCode: '' as string | undefined,
  }




  constructor(
    private projectService: ProjectService,
    private recruiterService: RecruiterService,
    private jobtService: JobService,
    private dashboardService: DashboardService,
    private credentialsService: CredentialsService,
    private talentService: TalentService,
    private modalService: NgbModal,
    public router: Router,
  ) {
    this._credentials = credentialsService.credentials;
  }

  ngOnInit(): void {
    debugger
    this.UserType = this.credentialsService.credentials?.UserTypeCode;
    this.GetTalentRelationList();
    // this.FilterList();
  }


  updatePage() { 
    debugger
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if(this.agencyalltalentlist && this.agencyalltalentlist.length){
      this.pagedData = this.agencyalltalentlist.slice(startIndex, endIndex);
    }
    else{
      this.pagedData=[];
    }
  }

  FilterList() {
    debugger
    let UserId: any = this._credentials?.UserId;
    // this.projectService.GetProjectsByUser(UserId).subscribe((resp) => {
    //   this.filterlist = resp.Data;
    // })
  }


  PassValue(Projectid: number, Jobsid: number, Talentid: number,Rel_Tal_Pro_Id: number) {
    debugger
    this.talentService.GetTalentById(Talentid).subscribe((resp) => {
      debugger
      this.userTypeDetailsModel = resp.Data;
      this.userTypeDetailsModel.ProjectId = Projectid;
      this.userTypeDetailsModel.JobId = Jobsid;
      this.userTypeDetailsModel.Rel_Tal_Pro_Id = Rel_Tal_Pro_Id;
      this.userTypeDetailsModel.ProfilePicPath = resp.Data.ProfilePicPath;
      this.userTypeDetailsModel.UserTypeCode=this._credentials?.UserTypeCode ;
      const modalRef = this.modalService.open(TalentListComponent,{size:'lg'});
      modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
      modalRef.result
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {

          console.log(error);
        });
    })
  };

  PassValueProject(Projectid: number) {
    debugger
        this.projectService.GetProjectById(Projectid).subscribe((resp) => {
          this.userTypeDetailsModel = resp.Data;
          this.userTypeDetailsModel.ProjectId = Projectid;
          const modalRef = this.modalService.open(TalentListComponent,{size:'lg'});
          modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
          modalRef.result
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
        })
      };

      PassValueJob(Projectid: number, Jobsid: number) {
        debugger
        this.projectService.GetProjectJobById(Jobsid).subscribe((resp) => {
          this.userTypeDetailsModel = resp.Data;
          this.userTypeDetailsModel.ProjectId = Projectid;
          this.userTypeDetailsModel.JobId = Jobsid;
          // const modalRef = this.modalService.open(JobdetailsPopupComponent,{size:'lg'});
          // modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
          // modalRef.result
          //   .then((result) => {
          //     console.log(result);
          //   })
          //   .catch((error) => {
    
          //     console.log(error);
          //   });
        }
        )
      };
    

      getPageNumbers(): number[] {
        const totalPages = this.getTotalPages();
        return Array.from({ length: totalPages }, (_, index) => index + 1);
        }
        getTotalPages(): number {
          if(this.agencyalltalentlist && this.agencyalltalentlist.length){
        return Math.ceil(this.agencyalltalentlist.length / this.pageSize);
        }
        return 0;
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
        onUserSearchChange(){
          this.pagedData = this.agencyalltalentlist.filter((item :any)=>
          item.UserName.toLowerCase().includes(this.usernameSearch.toLowerCase())
        );
        }
        onProjectSearchChange(){
          this.pagedData = this.agencyalltalentlist.filter((item :any)=>
          item.ProjectName.toLowerCase().includes(this.projectnameSearch.toLowerCase())
        );
        }
        onJobSearchChange(){
          this.pagedData = this.agencyalltalentlist.filter((item :any)=>
          item.JobTitle.toLowerCase().includes(this.jobnameSearch.toLowerCase())
        );
        }

      

  GetTalentRelationList() {
    debugger
    let UserId = this._credentials?.UserId;
    this.recruiterService.GetAllRecruiterTalents(UserId).subscribe((result: any) => {
      if (result.Data !== null && result.Data !== undefined) {
        this.agencyalltalentlist = result.Data;
        this.updatePage();
      }
    });
  }

}
