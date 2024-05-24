import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { NgbdSortableHeader } from '../../../shared/directives/sortable.directive';

@NgModule({
  declarations: [
    DataTableComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ]
})
export class DataTableModule { }
