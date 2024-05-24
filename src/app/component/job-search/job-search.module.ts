import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { ApplyFormComponent } from './apply/apply-form/apply-form.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobSimilerComponent } from './job-details/job-similer/job-similer.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { ListViewComponent } from './list-view/list-view.component';
import { PersonalDetailsComponent } from './apply/apply-form/personal-details/personal-details.component';
import { UploadFilesComponent } from './apply/apply-form/upload-files/upload-files.component';
import { YourEducationComponent } from './apply/apply-form/your-education/your-education.component';
import { YourExprienceComponent } from './apply/apply-form/your-exprience/your-exprience.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApplyComponent,
    ApplyFormComponent,
    CardsViewComponent,
    JobDetailsComponent,
    JobSimilerComponent,
    JobFilterComponent,
    ListViewComponent,
    PersonalDetailsComponent,
    UploadFilesComponent,
    YourEducationComponent,
    YourExprienceComponent
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
  ]
})
export class JobSearchModule { }
