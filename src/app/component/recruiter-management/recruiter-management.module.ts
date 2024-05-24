import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { RecruiterManagementRoutingModule } from "./recruiter-management-routing.module";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/shared/shared.module";
import { RecruiterProfileComponent } from "./recruiter-profile/recruiter-profile.component";
import { CommisionModuleComponent } from "./commision-module/commision-module/commision-module.component";
import { InterviewScheduleListComponent } from "./interview-management/interview-schedule-list/interview-schedule-list.component";
import { TalentListComponent } from "./talent-management/talent-list/talent-list.component";
import { AddTalentComponent } from "./talent-management/add-talent/add-talent.component";
import { TalentTimesheetComponent } from "./talent-management/talent-timesheet/talent-timesheet.component";
import { TalentJoblistComponent } from "./talent-management/talent-joblist/talent-joblist.component";
import { TalentProjectlistComponent } from "./talent-management/talent-projectlist/talent-projectlist.component";
import { AddTalentInterviewScheduleComponent } from "./interview-management/add-talent-interview-schedule/add-talent-interview-schedule.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { FinalTalentListComponent } from "./interview-management/final-talent-list/final-talent-list.component";
import { FinalSelectionListComponent } from "./interview-management/final-selection-list/final-selection-list.component";
import { SelectedRejectedTalentsComponent } from "./interview-management/selected-rejected-talents/selected-rejected-talents.component";
import { JobListComponent } from "./job-management/job-list/job-list.component";

@NgModule({
  declarations: [
    RecruiterProfileComponent,
    InterviewScheduleListComponent,
    CommisionModuleComponent,
    TalentListComponent,
    AddTalentComponent,
    TalentTimesheetComponent,
    TalentJoblistComponent,
    TalentProjectlistComponent,
    AddTalentInterviewScheduleComponent,
    FinalTalentListComponent,
    FinalSelectionListComponent,
    SelectedRejectedTalentsComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    RecruiterManagementRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [DatePipe],
})
export class RecruiterManagementModule {}
