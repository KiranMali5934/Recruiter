import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';
import { Invoice4Component } from './invoice4/invoice4.component';
import { Invoice5Component } from './invoice5/invoice5.component';
import { Invoice6Component } from './invoice6/invoice6.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'invoice1',
        component: Invoice1Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice1",
        }
      },
      {
        path: 'invoice2',
        component: Invoice2Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice2",
        }
      },
      {
        path: 'invoice3',
        component: Invoice3Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice3",
        }
      },
      {
        path: 'invoice4',
        component: Invoice4Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice4",
        }
      },
      {
        path: 'invoice5',
        component: Invoice5Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice5",
        }
      },
      {
        path: 'invoice6',
        component: Invoice6Component,
        data: {
          title: "Ecommerce",
          breadcrumb: "Invoice6",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
