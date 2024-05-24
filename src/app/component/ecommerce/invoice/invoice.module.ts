import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';
import { Invoice4Component } from './invoice4/invoice4.component';
import { Invoice5Component } from './invoice5/invoice5.component';
import { Invoice6Component } from './invoice6/invoice6.component';
import { Invoice1TableComponent } from './invoice1/invoice1-table/invoice1-table.component';
import { Invoice2TableComponent } from './invoice2/invoice2-table/invoice2-table.component';
import { Invoice2TopComponent } from './invoice2/invoice2-top/invoice2-top.component';
import { Invoice2TotalComponent } from './invoice2/invoice2-total/invoice2-total.component';
import { Invoice3TotalComponent } from './invoice3/invoice3-total/invoice3-total.component';
import { Invoice3TopComponent } from './invoice3/invoice3-top/invoice3-top.component';
import { Invoice3TableComponent } from './invoice3/invoice3-table/invoice3-table.component';
import { Invoice4TableComponent } from './invoice4/invoice4-table/invoice4-table.component';
import { Invoice4TopComponent } from './invoice4/invoice4-top/invoice4-top.component';
import { Invoice4TotalComponent } from './invoice4/invoice4-total/invoice4-total.component';
import { Invoice5TotalComponent } from './invoice5/invoice5-total/invoice5-total.component';
import { Invoice5TopComponent } from './invoice5/invoice5-top/invoice5-top.component';
import { Invoice5TableComponent } from './invoice5/invoice5-table/invoice5-table.component';
import { Invoice6TableComponent } from './invoice6/invoice6-table/invoice6-table.component';

@NgModule({
  declarations: [
    Invoice1Component,
    Invoice2Component,
    Invoice3Component,
    Invoice4Component,
    Invoice5Component,
    Invoice6Component,
    Invoice1TableComponent,
    Invoice2TableComponent,
    Invoice2TopComponent,
    Invoice2TotalComponent,
    Invoice3TotalComponent,
    Invoice3TopComponent,
    Invoice3TableComponent,
    Invoice4TableComponent,
    Invoice4TopComponent,
    Invoice4TotalComponent,
    Invoice5TotalComponent,
    Invoice5TopComponent,
    Invoice5TableComponent,
    Invoice6TableComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NgxPrintModule
  ]
})
export class InvoiceModule { }
