import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetaildCourseComponent } from './detaild-course/detaild-course.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'learning-list',
        component :LearningListComponent,
        data : {
          title : 'Learning List',
          breadcrumb : 'Learning List',
        }
      },
      {
        path : 'detailed-course',
        component :DetaildCourseComponent,
        data : {
          title : 'Detailed Course',
          breadcrumb : 'Detailed Course',
        }
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
