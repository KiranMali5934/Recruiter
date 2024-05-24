import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { M_ProjectsJobsModel } from 'src/app/shared/model/M_Projectjobs.model';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { TalentService } from 'src/app/shared/services/API/talent.service';

@Component({
  selector: 'app-talent-joblist',
  // standalone: true,
  // imports: [],
  templateUrl: './talent-joblist.component.html',
  styleUrl: './talent-joblist.component.scss'
})
export class TalentJoblistComponent {

  public _credentials: Credentials | null = null;
  public href: string = "";
  public count: any;
  public count1: any;
  isTabPendingClicked = false;
  isTabConfirmClicked = false;

  isHeaderShow = true;
  tab1: boolean = true;
  tab2: boolean = false;
  // Pagination properties
  pageSize = 15; // Number of items per page
  pageIndex = 0; // Current page index
  totalItems = 1; // Total number of items
  colors = ['badge-light-success', 'badge-light-info', 'badge-light-info', 'badge-light-warning'];

  // Update your userTypeModel to use for pagination
  paginatedUserTypeModel: any[] = [];
  public projectsJobsList: M_ProjectsJobsModel[] = [];

  constructor(private talentservice: TalentService, private credentialsService: CredentialsService, private router: Router) {
    this._credentials = credentialsService.credentials;
  }

  ngOnInit(): void {
    this.href = this.router.url;
    this.GetTalentsJobByUser();

  }
  GetTalentsJobByUser() {
    debugger
    let talentid: any = this._credentials?.GlobalUserId;
    this.talentservice.GetTalentsJobByUserId(talentid).subscribe((result) => {
      this.projectsJobsList = result.Data;
      this.count = result.Data.length;

    })
  }

  GetProjectsJobsById(id: any) {
    this.router.navigate(['/job/job-details/' + id]);
  }
  shortDescription(description: string, limit: number): string {
    if (description && description.length > limit) {
      return description.slice(0, limit) + '...';
    } else {
      return description;
    }
  }


}



