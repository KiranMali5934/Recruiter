import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { CommisionModuleComponent } from './commision-module/commision-module/commision-module.component';
import { ComingSimpleComponent } from '../pages/coming-soon/coming-simple/coming-simple.component';
import { InterviewScheduleListComponent } from './interview-management/interview-schedule-list/interview-schedule-list.component';
import { AddTalentInterviewScheduleComponent } from './interview-management/add-talent-interview-schedule/add-talent-interview-schedule.component';
import { FinalSelectionListComponent } from './interview-management/final-selection-list/final-selection-list.component';
import { FinalTalentListComponent } from './interview-management/final-talent-list/final-talent-list.component';
import { SelectedRejectedTalentsComponent } from './interview-management/selected-rejected-talents/selected-rejected-talents.component';
import { AddTalentComponent } from './talent-management/add-talent/add-talent.component';
import { TalentJoblistComponent } from './talent-management/talent-joblist/talent-joblist.component';
import { TalentProjectlistComponent } from './talent-management/talent-projectlist/talent-projectlist.component';
import { TalentTimesheetComponent } from './talent-management/talent-timesheet/talent-timesheet.component';
import { TalentListComponent } from './talent-management/talent-list/talent-list.component';
import { JobListComponent } from './job-management/job-list/job-list.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'recruiter-profile',
        component : RecruiterProfileComponent,
        data: {
          // title : 'My Profile',
          breadcrumb : 'My Profile'
            },
      },
      {
        path : 'add-talent',
        component : AddTalentComponent,
        data : {
          title : 'Add Talent',
          breadcrumb : 'Add Talent'
        }
      },
      {
        path : 'interview-schedule-list',
        component : InterviewScheduleListComponent,
        data : {
          title : 'Interview Schedule List',
          breadcrumb : 'Interview Schedule List'
        }
      },
      {
        path: 'add-interview-schedule', component: AddTalentInterviewScheduleComponent,
        data : {
          title : ' Schedule Interview',
          breadcrumb : 'Schedule Interview'
        }
        },
        {
          path: 'add-interview-schedule/:id', component: AddTalentInterviewScheduleComponent,
          data : {
            title : 'Add Interview Schedule',
            breadcrumb : 'Add Interview Schedule'
          }
        },
        {
          path: 'interview-changerequest', component: AddTalentInterviewScheduleComponent,
          data : {
            title : 'Interview Change Request',
            breadcrumb : 'Interview Change Request'
          }
        },
        {
          path: 'final-Selection', component: FinalSelectionListComponent,
          data: {
            title : 'Final Selection List',
            breadcrumb : 'Final Selection List'
              },
        },
        {
          path: 'interview-Selection', component: FinalTalentListComponent,
          data: {
            title : 'Interview Selection List',
                breadcrumb : 'Interview Selection List'
          },
        },
        {
          path: 'selectreject-talents', component: SelectedRejectedTalentsComponent,
          data: {
            title : 'Selected Rejected Talents',
            breadcrumb : 'Selected Rejected Talents'
          },
        },
        {
          path: 'talent-joblist', component: TalentJoblistComponent,
          data: {
            title : 'Applied Jobs',
            breadcrumb : 'Applied Jobs'
          },
        },
        {
          path: 'talent-projectlist', component: TalentProjectlistComponent,
          data: {
            title : 'Talent projects list',
            breadcrumb : 'Talent projects list'
          },
        },
        {
          path: 'talent-timesheet', component: TalentTimesheetComponent,
          data: {
            title : 'Talent timesheet list',
            breadcrumb : 'Talent timesheet list'
          },
        },
        {
          path: 'all-talent-list', component: TalentListComponent,
          data: {
            title : 'All Talents List',
            breadcrumb : 'All Talents List'
          },
        },
        {
          path: 'job-list', component: JobListComponent,
          data: {
            title : 'All Jobs',
            breadcrumb : 'All Jobs'
          },
        },
      {
        path : 'commision-module',
        component : ComingSimpleComponent,
      },
  
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterManagementRoutingModule { }
