import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { AddtasksTagComponent } from './tasks-modal/addtasks-tag/addtasks-tag.component';
import { NewTasksComponent } from './tasks-modal/new-tasks/new-tasks.component';
import { TaskSidemenuComponent } from './task-sidemenu/task-sidemenu.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TasksComponent } from './tasks.component';


@NgModule({
  declarations: [
    AddtasksTagComponent,
    NewTasksComponent,
    TaskSidemenuComponent,
    AllTasksComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
