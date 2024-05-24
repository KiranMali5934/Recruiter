import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { Select2Component } from './select2/select2.component';
import { SwitchComponent } from './switch/switch.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
          title: "Datepicker",
          breadcrumb: "Datepicker",
        }
      },
      {
        path: 'touchspin',
        component: TouchspinComponent,
        data: {
          title: "Touchspin",
          breadcrumb: "Touchspin",
        }
      },
      {
        path: 'select2',
        component: Select2Component,
        data: {
          title: "Select2",
          breadcrumb: "Select2",
        }
      },
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: "Switch",
          breadcrumb: "Switch",
        }
      },
      {
        path: 'typeahead',
        component: TypeheadComponent,
        data: {
          title: "Typeahead",
          breadcrumb: "Typeahead",
        }
      },
      {
        path: 'clipboard',
        component: ClipboardComponent,
        data: {
          title: "Clipboard",
          breadcrumb: "Clipboard",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormWidgetsRoutingModule { }
