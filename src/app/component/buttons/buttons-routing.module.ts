import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { FlatStyleComponent } from './flat-style/flat-style.component';
import { EdgeStyleComponent } from './edge-style/edge-style.component';
import { RaisedStyleComponent } from './raised-style/raised-style.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default-style',
        component: DefaultStyleComponent,
        data: {
          title: "Default Style",
          breadcrumb: "Default Style",

        }
      },
      {
        path: 'flat-buttons',
        component: FlatStyleComponent,
        data: {
          title: "Flat Style",
          breadcrumb: "Flat Buttons",

        }
      },
      {
        path: 'edge-buttons',
        component: EdgeStyleComponent,
        data: {
          title: "Edge Buttons",
          breadcrumb: "Edge Buttons",

        }
      },
      {
        path: 'raised-buttons',
        component: RaisedStyleComponent,
        data: {
          title: "Raised Buttons",
          breadcrumb: "Raised Buttons",

        }
      },
      {
        path: 'button-group',
        component: ButtonGroupComponent,
        data: {
          title: "Button Group",
          breadcrumb: "Button Group",

        }
      },
    
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
