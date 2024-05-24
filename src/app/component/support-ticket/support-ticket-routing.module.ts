import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportTicketComponent } from './support-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: SupportTicketComponent,
    data: {
      title: 'Support Ticket',
      breadcrumb: 'Support Ticket'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTicketRoutingModule { }
