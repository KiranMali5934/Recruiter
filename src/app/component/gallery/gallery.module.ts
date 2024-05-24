import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry'
import { GalleryRoutingModule } from './gallery-routing.module';

import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryWithDesComponent } from './masonry-with-des/masonry-with-des.component';



@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridDescComponent,
    MasonryGalleryComponent,
    MasonryWithDesComponent,
    HoverEffectsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    LightboxModule,
    SharedModule,
    NgxMasonryModule
  ]
})
export class GalleryModule { }
