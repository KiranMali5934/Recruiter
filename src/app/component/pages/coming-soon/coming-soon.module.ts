import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';
import { ComingBgVideoComponent } from './coming-bg-video/coming-bg-video.component';


@NgModule({
  declarations: [
    ComingSimpleComponent,
    ComingBgImageComponent,
    ComingBgVideoComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule
  ]
})
export class ComingSoonModule { }
