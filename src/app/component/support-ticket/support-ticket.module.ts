import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';
import { SupportTicketDatatableComponent } from './support-ticket-datatable/support-ticket-datatable.component';
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { NgbdSortableHeader2 } from '../../shared/directives/support-ticket.directive';

@NgModule({
  declarations: [
    SupportTicketComponent,
    SupportTicketListComponent,
    SupportTicketDatatableComponent,
    NgbdSortableHeader2
  ],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SupportTicketService, DecimalPipe],
})
export class SupportTicketModule { }
