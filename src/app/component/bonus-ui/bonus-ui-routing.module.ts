import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastsComponent } from './toasts/toasts.component';
import { RatingComponent } from './rating/rating.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CreativeCardComponent } from './creative-card/creative-card.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'toasts',
        component: ToastsComponent,
        data: {
          title: "Toasts",
          breadcrumb: "Toasts",
        }
      },
      {
        path: 'rating',
        component: RatingComponent,
        data: {
          title: "Rating",
          breadcrumb: "Rating",
        }
      },
      {
        path: 'dropzone',
        component: DropzoneComponent,
        data: {
          title: "Dropzone",
          breadcrumb: "Dropzone",
        }
      },
      {
        path: 'sweetalert2',
        component: Sweetalert2Component,
        data: {
          title: "Sweet Alert",
          breadcrumb: "Sweet Alert",
        }
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent,
        data: {
          title: "Owl Carousel",
          breadcrumb: "Owl Carousel",
        }
      },
      {
        path: 'ribbons',
        component: RibbonsComponent,
        data: {
          title: "Ribbons",
          breadcrumb: "Ribbons",
        }
      },
      {
        path: 'pagination',
        component: PaginationsComponent,
        data: {
          title: "Paginations",
          breadcrumb: "Paginations",
        }
      },
      {
        path: 'breadcrumb',
        component: BreadcrumbComponent,
        data: {
          title: "Breadcrumb",
          breadcrumb: "Breadcrumb",
        }
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent,
        data: {
          title: "Range Slider",
          breadcrumb: "Range Slider",
        }
      },
      {
        path: 'image-cropper',
        component: ImageCropperComponent,
        data: {
          title: "Image Cropper",
          breadcrumb: "Image Cropper",
        }
      },
      {
        path: 'basic-card',
        component: BasicCardComponent,
        data: {
          title: "Basic Card",
          breadcrumb: "Basic Card",
        }
      },
      {
        path: 'creative-card',
        component: CreativeCardComponent,
        data: {
          title: "Creative Card",
          breadcrumb: "Creative Card",
        }
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        data: {
          title: "Timeline",
          breadcrumb: "Timeline",
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusUiRoutingModule { }
