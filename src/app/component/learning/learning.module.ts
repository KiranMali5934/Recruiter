import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from '../blog/blog.module';
import { SharedModule } from '../../shared/shared.module';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetaildCourseComponent } from './detaild-course/detaild-course.component';
import { UpcomingCourceComponent } from './learning-filter/upcoming-cource/upcoming-cource.component';
import { FindCourceComponent } from './learning-filter/find-cource/find-cource.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LearningFilterComponent,
    LearningListComponent,
    DetaildCourseComponent,
    UpcomingCourceComponent,
    FindCourceComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    BlogModule,
    SharedModule,
    NgbModule
  ]
})
export class LearningModule { }
