import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { InputMaskComponent } from './input-mask/input-mask.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'validation',
        component: ValidationFormComponent,
        data: {
          title: "Validation Form",
          breadcrumb: "Validation Form",
        }
      },
      {
        path: 'inputs',
        component: BaseInputComponent,
        data: {
          title: "Base Inputs",
          breadcrumb: "Base Inputs",
        }
      },
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent,
        data: {
          title: "Checkbox & Radio",
          breadcrumb: "Checkbox-Radio",
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: "Input Groups",
          breadcrumb: "Input Groups",
        }
      },
      {
        path: 'input-mask',
        component: InputMaskComponent,
        data: {
          title: "Input Mask",
          breadcrumb: "Input Mask",
        }
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent,
        data: {
          title: "Mega Options",
          breadcrumb: "Mega Options",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
