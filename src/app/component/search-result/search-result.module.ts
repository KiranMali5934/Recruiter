import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { AllComponent } from './all/all.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    AllComponent,
    ImagesComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    LightboxModule
  ]
})
export class SearchResultModule { }
