import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hide-nav-scroll',
        component: HideNavScrollComponent,
        data: {
          title: "Hide Menu On Scrolll",
          breadcrumb: "Hide Menu On Scrolll",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
