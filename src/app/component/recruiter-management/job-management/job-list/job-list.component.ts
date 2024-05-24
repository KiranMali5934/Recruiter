import { Component } from '@angular/core';
// import { jobCardsData } from '../../../shared/data/job-search/job-search';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobService } from 'src/app/shared/services/API/job.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { EmitService } from 'src/app/shared/services/API/emit.service';
import { Router } from '@angular/router';
import { ProjectJobModel } from 'src/app/shared/model/projectjob.model';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { TalentService } from 'src/app/shared/services/API/talent.service';
import { SkillService } from 'src/app/shared/services/API/skill.service';
import { SkillModel } from 'src/app/shared/model/skill.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-list',
  // standalone: true,
  // imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {

  public rating = 5;
  JobId: number = 0;
  public _credentials: Credentials | null = null;
  public projectsJobsList: ProjectJobModel[] = [];
  public appliedjobmodel: any = {
    ProjectId: 0,
    JobsId: 0,
    IsApplied: true,
    IsApproved: false,
    IsAdminApproved: false,
    TalentId: 0,
    UserId: 0,
    isActive: false,
    createdBy: "",
    createdDate: "",

  };
  public isCollapsed = false;
  public isCollapsedLocation = true;
  public isCollapsedRoll = true;
  public isCollapsedSkill = true;
  public isCollapsedseniority = true;
  public isCollapsedJob = true;
  public isCollapsedContract = true;
  public isCollapsedCompany = true;
  public isCollapsedDuration = true;
  public isCollapsedDate = true;
  public Open: boolean = false
  SearchModel: any = {
    Skills: '',
    JobType: false,
    allData: false,
    Location: '',
    postingDate: '',
    searchChar: '',
    CompanySize: '',
    ContractTypes: '',
    Experiences: '',
    IndustryTypes: '',
    PrimaryRoles: '',
    ProjectDurations: '',
  };

  checkedData: any[] = [];
  CompanySize: any[] = [];
  ContractTypes: any[] = [];
  Experiences: any[] = [];
  JobType: any[] = [];
  Location: any[] = [];
  PrimaryRoles: any[] = [];
  ProjectDurations: any[] = [];
  public PostingDateList:any = [];
  public skillList: SkillModel[] = [];


  constructor(
    public config: NgbRatingConfig,
    private jobService: JobService,
    private credentialsService: CredentialsService,
    private emitService: EmitService,
    private router: Router, private skillService: SkillService,
    private talentservice :TalentService
  ) {
    config.max = 5;
    this._credentials = credentialsService.credentials;
    this.emitService.emitSubject.subscribe((f: any) => {
      this.projectsJobsList = f;
    })
  }

  ngOnInit(): void {
    this.GetProjectsJobsList();
    this.GetAllCommonDDL();
    this.getSkillList();
    this.getPostingDateList();

  }
  public detail: boolean = false;
  public flag: string;
  public val: string;
  public icon: string;
  public allIconData = [
    {
        title: 'Feather Icons',
        icons: ["grid"]
    }
]
public allIcongrid = [
  {
      title: 'Feather Icons',
      icons: [ "list"]
  }
]
ListView(){
  this.router.navigate(['/job/list-view']);
}
CardViewList(){
  this.router.navigate(['/job/cards-view']);
}
  GetProjectsJobsById(id: any) { 
    this.router.navigate(['/job/job-details/' + id]);
  }
  ApplyJob(Projectid: number, JobId: number,UserId:number) {
    debugger
    this.appliedjobmodel.JobsId = JobId;
    this.appliedjobmodel.ProjectId = Projectid;
    this.appliedjobmodel.UserId = UserId;
    this.appliedjobmodel.TalentId = this._credentials?.GlobalUserId;
    this.appliedjobmodel.IsApplied = true;
    this.appliedjobmodel.IsApproved = false;
    this.appliedjobmodel.IsAdminApproved = false;
    this.appliedjobmodel.createdBy = this._credentials?.Email;
    this.appliedjobmodel.isActive = false;
  const modelArray = [{
      JobsId:  this.appliedjobmodel.JobsId,
      ProjectId:  this.appliedjobmodel.ProjectId,
      UserId:  this.appliedjobmodel.UserId,
      TalentId: this._credentials?.GlobalUserId,
      IsApplied: true,
      IsApproved: false,
      IsAdminApproved: false,
      createdBy: this._credentials?.Email,
      isActive: false,
      Rel_Tal_Pro_Id: 0,
    }];
    this.talentservice.AddUpdateRel_Project(modelArray)
      .subscribe(
        // (response) => {
        //  this.GetProjectsJobsList() ;
        // },
        (res: any | undefined) => {
          if (res.Success) {
            //log.debug(`${res?.Email} successfully register timesheet`);

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
               this.GetProjectsJobsList() ;
              });
            }
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

// for set limit on description
  shortDescription(description: string, limit: number): string {
    if (description && description.length > limit) {
      return description.slice(0, limit) + '...';
    } else {
      return description;
    }
  }
  onInputChange(newValue: string) {
    if(newValue){
      if (newValue.length >= 3) {
        // If the input length is at least 3 characters, trigger the search
        this.GetProjectsJobsListfilterd(newValue);
      } 
    }
   else{
    this.onInputCleared(); 
   }
  }
  GetProjectsJobsList() {
    let id: any = this._credentials?.GlobalUserId;
    this.jobService.GetProjectsJobsList(id).subscribe((resp) => {
      if (resp.Success) {
        if (resp.Data.length > 0) {
          this.projectsJobsList = resp.Data; 
        }
        else {
          this.projectsJobsList = [];
        }
      }
    });
  }
  GetProjectsJobsListfilterd(searchTerm: string = '') {
    debugger
    // Check if the search term is at least 3 characters
    if (searchTerm.length >= 3) {
      // Perform the search based on job title
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      // Filter the projectsJobsList based on the job title
      this.projectsJobsList = this.projectsJobsList.filter(item =>
        item.JobTitle.toLowerCase().includes(lowerCaseSearchTerm)
      );
    } else {
      // Retrieve the initial list of projects
      let id: any = this._credentials?.UserId;
      this.jobService.GetProjectsJobsList(id).subscribe((resp) => {
        if (resp.Success) {
          if (resp.Data.length > 0) {
            this.projectsJobsList = resp.Data;
          } else {
            this.projectsJobsList = [];
          }
        }
      });
    }
  }
  onInputCleared() {
    this.GetProjectsJobsList();
  }
  // for get all filter list
  GetAllCommonDDL() {
    this.jobService.GetAllCommonDDL().subscribe((resp: any) => {
      if (resp.Success) {
        if (resp.Data !== undefined || resp.Data !== null || resp.Data !== '') {
          this.CompanySize = resp.Data.CompanySize;
          this.ContractTypes = resp.Data.ContractTypes;
          this.Experiences = resp.Data.Experiences;
          this.JobType = resp.Data.JobType;
          this.Location = resp.Data.Location;
          this.PrimaryRoles = resp.Data.PrimaryRoles;
          this.ProjectDurations = resp.Data.ProjectDurations;
        }
      }
    });
  }

  // for get skill list 
  getSkillList() {  
    this.skillService.GetAllSkill().subscribe((resp:any) => {
      if (resp.Success) {
        if (resp.Data !== undefined || resp.Data !== null || resp.Data !== '') {
          if (resp.Data.length > 0) {
            this.skillList = resp.Data;
          }
        }
      }
    });
  }

  // for get PostingDate List 
  getPostingDateList() {
    this.PostingDateList = [
      { item_id: 'Last 30 Days', item_text: 'Last 30 Days' },
      { item_id: 'Last 15 Days', item_text: 'Last 15 Days' },
      { item_id: 'Last 7 Days', item_text: 'Last 7 Days' },
      { item_id: 'Last 3 Days', item_text: 'Last 3 Days' },
      { item_id: 'Last 1 Days', item_text: 'Last 1 Days' },
    ];
  }


  selectedLocations: { [key: string]: boolean } = {};
selectedPrimaryRoles: { [key: string]: boolean } = {};
selectedSkills: { [key: string]: boolean } = {};
selectedSeniority: { [key: string]: boolean } = {};
selectedJobTypes: { [key: string]: boolean } = {};
selectedContractTypes: { [key: string]: boolean } = {};
selectedCompanySizes: { [key: string]: boolean } = {};
selectedProjectDurations: { [key: string]: boolean } = {};
selectedPostingDates: { [key: string]: boolean } = {};

updateSelectedLocations() {
  debugger
    // Extract selected location IDs
    const selectedLocationIds = Object.keys(this.selectedLocations)
                                    .filter(key => this.selectedLocations[key]);

    // Update SearchModel with selected location IDs
    this.SearchModel.Location = selectedLocationIds.join(',');

    // Call getSearchedValue to fetch filtered job listings
    this.getSearchedValue();
}
updateSelectedPrimaryRoles() {
  const selectedPrimaryRoleIds = Object.keys(this.selectedPrimaryRoles)
      .filter(key => this.selectedPrimaryRoles[key]);
  this.SearchModel.PrimaryRoll = selectedPrimaryRoleIds.join(',');
  this.getSearchedValue();
}
updateSelectedSkills() {
  const selectedSkillIds = Object.keys(this.selectedSkills)
      .filter(key => this.selectedSkills[key]);
  this.SearchModel.Skills = selectedSkillIds.join(',');
  this.getSearchedValue();
}
updateSelectedSeniority() {
  const selectedSeniorityIds = Object.keys(this.selectedSeniority)
      .filter(key => this.selectedSeniority[key]);
  this.SearchModel.Seniority = selectedSeniorityIds.join(',');
  this.getSearchedValue();
}
updateSelectedJobTypes() {
  const selectedJobTypeIds = Object.keys(this.selectedJobTypes)
      .filter(key => this.selectedJobTypes[key]);
  this.SearchModel.JobType = selectedJobTypeIds.join(',');
  this.getSearchedValue();
}
updateSelectedContractTypes() {
  const selectedContractTypeIds = Object.keys(this.selectedContractTypes)
      .filter(key => this.selectedContractTypes[key]);
  this.SearchModel.ContractType = selectedContractTypeIds.join(',');
  this.getSearchedValue();
}
updateSelectedCompanySizes() {
  const selectedCompanySizeIds = Object.keys(this.selectedCompanySizes)
      .filter(key => this.selectedCompanySizes[key]);
  this.SearchModel.CompanySize = selectedCompanySizeIds.join(',');
  this.getSearchedValue();
}
updateSelectedProjectDurations() {
  const selectedProjectDurationIds = Object.keys(this.selectedProjectDurations)
      .filter(key => this.selectedProjectDurations[key]);
  this.SearchModel.ProjectDuration = selectedProjectDurationIds.join(',');
  this.getSearchedValue();
}
updateSelectedPostingDates() {
  const selectedPostingDateIds = Object.keys(this.selectedPostingDates)
      .filter(key => this.selectedPostingDates[key]);
  this.SearchModel.PostingDate = selectedPostingDateIds.join(',');
  this.getSearchedValue();
}

  // for get Serach Filterdata  
  getSearchedValue() {
    let NewSearchArrayModel: any = {
      UserId: this._credentials?.UserId,
      SearchLocation: this.SearchModel.Location,
      SearchCompanySize: this.SearchModel.CompanySize,
      SearchContractTypes: this.SearchModel.ContractType,
      SearchExperiences: this.SearchModel.Seniority,
      SearchPrimaryRoles: this.SearchModel.PrimaryRoll,
      SearchProjectDurations: this.SearchModel.ProjectDuration,
      SearchSkills: this.SearchModel.Skills,
      SearchJobType: this.SearchModel.JobType,
      SearchPostingDate: this.SearchModel.PostingDate,
      SearchChar: this.SearchModel.searchChar,
    };
    this.jobService.FilterByProjectJobs(NewSearchArrayModel).subscribe((resp: any) => {
      if (resp.Success) {
        if (resp.Data !== undefined || resp.Data !== null || resp.Data !== '') {
          if (resp.Data.length > 0) {
            this.projectsJobsList = resp.Data;
          }
          this.sendfilterdata(this.projectsJobsList);
        }
        else {
          this.projectsJobsList = [];
        }
      }
    });
  }

  // for send data to job list component  
  sendfilterdata(data: any) {
    this.emitService.sendfilterdata(data);
  }
  
  // for open filter toggle 
  openFilter() {
    this.Open = !this.Open
  }

  // for close filter toggle 
  closeFilter(): void {
    this.Open = false;
  }

  filterJob(Id: any, type: string) {
    debugger
    if (Id != null) {
        // Add or remove the selected ID based on checkbox state
        if (this.checkedData.includes(Id)) {
            this.checkedData = this.checkedData.filter(item => item !== Id);
        } else {
            this.checkedData.push(Id);
        }

        // Update the corresponding property in SearchModel based on the type
        switch (type) {
            case 'Location':
                this.SearchModel.Location = this.checkedData.toString();
                break;
            case 'PrimaryRoll':
                this.SearchModel.PrimaryRolls = this.checkedData.toString();
                break;
            case 'Skill':
                this.SearchModel.Skill = this.checkedData.toString();
                break;
                case 'Seniority':
                    this.SearchModel.Seniority = this.checkedData.toString();
                    break;
                case 'JobType':
                    this.SearchModel.JobType = this.checkedData.toString();
                    break;
                case 'ContractType':
                    this.SearchModel.ContractType = this.checkedData.toString();
                    break;
                case 'CompanySize':
                    this.SearchModel.CompanySize = this.checkedData.toString();
                    break;
                case 'ProjectDuration':
                    this.SearchModel.ProjectDuration = this.checkedData.toString();
                    break;
                case 'PostingDate':
                    this.SearchModel.PostingDate = this.checkedData.toString();
                    break;
            default:
                break;
        }

        // Call getSearchedValue to fetch filtered job listings
        this.getSearchedValue();
    }
}

}


