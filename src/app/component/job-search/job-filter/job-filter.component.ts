import { Component } from '@angular/core';
import { SkillModel } from 'src/app/shared/model/skill.model';
import { JobService } from 'src/app/shared/services/API/job.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { EmitService } from 'src/app/shared/services/API/emit.service';
import { SkillService } from 'src/app/shared/services/API/skill.service';
import { ProjectJobModel } from 'src/app/shared/model/projectjob.model';
import { Credentials } from 'src/app/shared/model/authentication.model';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent {

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
  public projectsJobsList: ProjectJobModel[] = [];
  public _credentials: Credentials | null = null;


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
  public skillList: SkillModel[] = [];
  public PostingDateList: Array<any> = [];

  constructor(
    private jobService: JobService,
    private credentialsService: CredentialsService,
    private emitService: EmitService,
    private skillService: SkillService,
  ) {
    this._credentials = credentialsService.credentials;
  }

  ngOnInit(): void {
    this.GetAllCommonDDL();
    this.getSkillList();
    this.getPostingDateList();
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
    
    let id: any = this._credentials?.UserId;
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

  // for filter Job List 
  filterJob(Id: any, type: string) {

    if (Id != null && type == 'Location') {
      this.checkedData.push(Id);
      this.SearchModel.Location = this.checkedData.toString();
    }
    else if (Id != null && type == 'PrimaryRoll') {
      this.checkedData.push(Id);
      this.SearchModel.PrimaryRolls = this.checkedData.toString();
    }
    else if (Id != null && type == 'Skill') {
      this.checkedData.push(Id);
      this.SearchModel.Skill = this.checkedData.toString();
    }
    else if (Id != null && type == 'Seniority') {
      this.checkedData.push(Id);
      this.SearchModel.Seniority = this.checkedData.toString();
    }
    else if (Id != null && type == 'JobType') {
      this.checkedData.push(Id);
      this.SearchModel.JobType = this.checkedData.toString();
    }
    else if (Id != null && type == 'ContractType') {
      this.checkedData.push(Id);
      this.SearchModel.ContractType = this.checkedData.toString();
    }
    else if (Id != null && type == 'CompanySize') {
      this.checkedData.push(Id);
      this.SearchModel.CompanySize = this.checkedData.toString();
    }
    else if (Id != null && type == 'ProjectDuration') {
      this.checkedData.push(Id);
      this.SearchModel.ProjectDuration = this.checkedData.toString();
    }
    else if (Id != null && type == 'PostingDate') {
      this.checkedData.push(Id);
      this.SearchModel.PostingDate = this.checkedData.toString();
    }

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

}
