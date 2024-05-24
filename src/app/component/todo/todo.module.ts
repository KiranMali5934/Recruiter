import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFilterComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
