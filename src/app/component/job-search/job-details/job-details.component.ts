import { Component } from '@angular/core';
import { jobDetail } from '../../../shared/data/job-search/job-search';
import { ProjectJobModel } from 'src/app/shared/model/projectjob.model';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/shared/services/API/job.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { TalentService } from 'src/app/shared/services/API/talent.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  public jobDetail = jobDetail;

  userTypeModel: any = [];
  userTypeDetailsModel: any = [];
  public href: string = '';
  public _credentials: Credentials | null = null;
  jobId: any;
  projectsJobsmodel = new ProjectJobModel();

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    private jobService: JobService,
    private talentservice: TalentService,
  ) {
    this._credentials = this.credentialsService.credentials;
    if (this.route.snapshot.params['id']) {
      this.jobId = this.route.snapshot.params['id'];
    }
  }
  ngOnInit() {
    this.GetJobDetails(this.jobId);
  }

  //for get job details 
  GetJobDetails(value: any) {
    this.jobService.GetProjectsJobsById(value).subscribe((resp: any) => {
      if (resp.Success) {
        if (resp.Data !== undefined || resp.Data !== null || resp.Data !== ''){
          if (resp.Data.length > 0) {
            this.projectsJobsmodel = resp.Data[0];
          }
        }
      }
    });
  }

  //for apply on job 
  ApplyJob(ProjectId: number, JobId: number,UserId:number) {
    this.appliedjobmodel.JobsId = JobId;
    this.appliedjobmodel.ProjectId = ProjectId;
    this.appliedjobmodel.UserId = UserId;
    this.appliedjobmodel.TalentId = this._credentials?.GlobalUserId;
    this.appliedjobmodel.IsApplied = true;
    this.appliedjobmodel.IsApproved = false;
    this.appliedjobmodel.IsAdminApproved = false;
    this.appliedjobmodel.createdBy = this._credentials?.Email;
    this.appliedjobmodel.isActive = false;

    const modelArray = [{
      JobsId: this.appliedjobmodel.JobsId,
      ProjectId: this.appliedjobmodel.ProjectId,
      UserId: this._credentials?.UserId,
      TalentId: this._credentials?.GlobalUserId,
      IsApplied: true,
      IsApproved: false,
      IsAdminApproved: false,
      createdBy: this._credentials?.Email,
      isActive: false,
    }];
    this.talentservice.AddUpdateRel_Project(modelArray).subscribe((response) => {
      if (response) {
        this.router.navigate(['/job/list-view']);
      }
    },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
