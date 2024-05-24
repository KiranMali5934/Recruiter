import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutRoutingModule } from './page-layout-routing.module';

import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';


@NgModule({
  declarations: [
    HideNavScrollComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule
  ]
})
export class PageLayoutModule { }
