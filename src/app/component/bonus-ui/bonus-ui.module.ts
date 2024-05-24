import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from 'ngx-slider-v2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageCropperModule } from 'ngx-image-cropper';

import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { ToastsComponent } from './toasts/toasts.component';
import { RatingComponent } from './rating/rating.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { LiveToastComponent } from './toasts/live-toast/live-toast.component';
import { StackingToastsComponent } from './toasts/stacking-toasts/stacking-toasts.component';
import { TranslucentToastsComponent } from './toasts/translucent-toasts/translucent-toasts.component';
import { ColorsSchemesToastsComponent } from './toasts/colors-schemes-toasts/colors-schemes-toasts.component';
import { DefaultToastsComponent } from './toasts/default-toasts/default-toasts.component';
import { UniqueToastComponent } from './toasts/unique-toast/unique-toast.component';
import { MovieRatingbarComponent } from './rating/movie-ratingbar/movie-ratingbar.component';
import { OneToTenRatingbarComponent } from './rating/one-to-ten-ratingbar/one-to-ten-ratingbar.component';
import { SquareRatingbarComponent } from './rating/square-ratingbar/square-ratingbar.component';
import { StarRatingbarComponent } from './rating/star-ratingbar/star-ratingbar.component';
import { HorizontalRatingbarComponent } from './rating/horizontal-ratingbar/horizontal-ratingbar.component';
import { CurrentRatingbarComponent } from './rating/current-ratingbar/current-ratingbar.component';
import { DefaultFileUploadComponent } from './dropzone/default-file-upload/default-file-upload.component';
import { MultiFileUploadComponent } from './dropzone/multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './dropzone/single-file-upload/single-file-upload.component';
import { ImagePerviewComponent } from './dropzone/image-perview/image-perview.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { VariationsLeftRibbonsComponent } from './ribbons/variations-left-ribbons/variations-left-ribbons.component';
import { VariationsRightRibbonsComponent } from './ribbons/variations-right-ribbons/variations-right-ribbons.component';
import { SlidesOnlyComponent } from './owl-carousel/slides-only/slides-only.component';
import { CrossFadeComponent } from './owl-carousel/cross-fade/cross-fade.component';
import { AutoHeightExampleComponent } from './owl-carousel/auto-height-example/auto-height-example.component';
import { AutoPlayComponent } from './owl-carousel/auto-play/auto-play.component';
import { CenterExampleComponent } from './owl-carousel/center-example/center-example.component';
import { LazyLoadExampleComponent } from './owl-carousel/lazy-load-example/lazy-load-example.component';
import { RightLeftExampleComponent } from './owl-carousel/right-left-example/right-left-example.component';
import { AutoWidthExampleComponent } from './owl-carousel/auto-width-example/auto-width-example.component';
import { ResponsiveExampleComponent } from './owl-carousel/responsive-example/responsive-example.component';
import { BasicExampleComponent } from './sweetalert2/basic-example/basic-example.component';
import { TitleTextAlertComponent } from './sweetalert2/title-text-alert/title-text-alert.component';
import { InfoAlertComponent } from './sweetalert2/info-alert/info-alert.component';
import { WarningAlertComponent } from './sweetalert2/warning-alert/warning-alert.component';
import { PickachuAlertComponent } from './sweetalert2/pickachu-alert/pickachu-alert.component';
import { QuestionsAlertComponent } from './sweetalert2/questions-alert/questions-alert.component';
import { UsernameAlertComponent } from './sweetalert2/username-alert/username-alert.component';
import { SuccessAlertComponent } from './sweetalert2/success-alert/success-alert.component';
import { DangerAlertComponent } from './sweetalert2/danger-alert/danger-alert.component';
import { WarningModeComponent } from './sweetalert2/warning-mode/warning-mode.component';
import { AutoCloseTimerComponent } from './sweetalert2/auto-close-timer/auto-close-timer.component';
import { AjaxRequestMovieComponent } from './sweetalert2/ajax-request-movie/ajax-request-movie.component';
import { DefaultPaginationComponent } from './paginations/default-pagination/default-pagination.component';
import { ActiveDisabledPaginationComponent } from './paginations/active-disabled-pagination/active-disabled-pagination.component';
import { IconsPaginationComponent } from './paginations/icons-pagination/icons-pagination.component';
import { RoundedPaginationComponent } from './paginations/rounded-pagination/rounded-pagination.component';
import { AlignmentPaginationComponent } from './paginations/alignment-pagination/alignment-pagination.component';
import { SizingPaginationComponent } from './paginations/sizing-pagination/sizing-pagination.component';
import { DefaultBreadcrumbComponent } from './breadcrumb/default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './breadcrumb/divider-breadcrumb/divider-breadcrumb.component';
import { IconsBreadcrumbComponent } from './breadcrumb/icons-breadcrumb/icons-breadcrumb.component';
import { VariationBreadcrumbComponent } from './breadcrumb/variation-breadcrumb/variation-breadcrumb.component';
import { ColoredBreadcrumbComponent } from './breadcrumb/colored-breadcrumb/colored-breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CreativeCardComponent } from './creative-card/creative-card.component';
import { DefaultRangeSliderComponent } from './range-slider/default-range-slider/default-range-slider.component';
import { MinMaxSliderComponent } from './range-slider/min-max-slider/min-max-slider.component';
import { CustomValuesComponent } from './range-slider/custom-values/custom-values.component';
import { PrettifyNumberComponent } from './range-slider/prettify-number/prettify-number.component';
import { DisabledComponent } from './range-slider/disabled/disabled.component';
import { CommonBorderCardComponent } from './creative-card/common-border-card/common-border-card.component';
import { CommonAbsoluteCardComponent } from './creative-card/common-absolute-card/common-absolute-card.component';
import { BorderPrimaryStateComponent } from './creative-card/border-primary-state/border-primary-state.component';
import { BorderWarningStateComponent } from './creative-card/border-warning-state/border-warning-state.component';
import { BorderSecondaryStateComponent } from './creative-card/border-secondary-state/border-secondary-state.component';
import { SimpleCardComponent } from './basic-card/simple-card/simple-card.component';
import { FlatCardComponent } from './basic-card/flat-card/flat-card.component';
import { IconHeadingComponent } from './basic-card/icon-heading/icon-heading.component';
import { WithoutShadowCardComponent } from './basic-card/without-shadow-card/without-shadow-card.component';
import { DarkCardComponent } from './basic-card/dark-card/dark-card.component';
import { CommonInfoCardComponent } from './basic-card/common-info-card/common-info-card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BasicTimelineComponent } from './timeline/basic-timeline/basic-timeline.component';
import { HoveringTimelineComponent } from './timeline/hovering-timeline/hovering-timeline.component';
import { VariationTimelineComponent } from './timeline/variation-timeline/variation-timeline.component';
import { HorizontalTimelineComponent } from './timeline/horizontal-timeline/horizontal-timeline.component';
import { TimelineChartComponent } from './timeline/timeline-chart/timeline-chart.component';
import { AudioTestingComponent } from './timeline/timeline-chart/audio-testing/audio-testing.component';
import { MeetUpComponent } from './timeline/timeline-chart/meet-up/meet-up.component';
import { ResolutionsComponent } from './timeline/timeline-chart/resolutions/resolutions.component';

@NgModule({
  declarations: [
    ToastsComponent,
    RatingComponent,
    DropzoneComponent,
    LiveToastComponent,
    StackingToastsComponent,
    TranslucentToastsComponent,
    ColorsSchemesToastsComponent,
    DefaultToastsComponent,
    UniqueToastComponent,
    MovieRatingbarComponent,
    OneToTenRatingbarComponent,
    SquareRatingbarComponent,
    StarRatingbarComponent,
    HorizontalRatingbarComponent,
    CurrentRatingbarComponent,
    DefaultFileUploadComponent,
    MultiFileUploadComponent,
    SingleFileUploadComponent,
    ImagePerviewComponent,
    RibbonsComponent,
    Sweetalert2Component,
    OwlCarouselComponent,
    PaginationsComponent,
    BreadcrumbComponent,
    VariationsLeftRibbonsComponent,
    VariationsRightRibbonsComponent,
    SlidesOnlyComponent,
    CrossFadeComponent,
    AutoHeightExampleComponent,
    AutoPlayComponent,
    CenterExampleComponent,
    LazyLoadExampleComponent,
    RightLeftExampleComponent,
    AutoWidthExampleComponent,
    ResponsiveExampleComponent,
    BasicExampleComponent,
    TitleTextAlertComponent,
    InfoAlertComponent,
    WarningAlertComponent,
    PickachuAlertComponent,
    QuestionsAlertComponent,
    UsernameAlertComponent,
    SuccessAlertComponent,
    DangerAlertComponent,
    WarningModeComponent,
    AutoCloseTimerComponent,
    AjaxRequestMovieComponent,
    DefaultPaginationComponent,
    ActiveDisabledPaginationComponent,
    IconsPaginationComponent,
    RoundedPaginationComponent,
    AlignmentPaginationComponent,
    SizingPaginationComponent,
    DefaultBreadcrumbComponent,
    DividerBreadcrumbComponent,
    IconsBreadcrumbComponent,
    VariationBreadcrumbComponent,
    ColoredBreadcrumbComponent,
    RangeSliderComponent,
    ImageCropperComponent,
    BasicCardComponent,
    CreativeCardComponent,
    DefaultRangeSliderComponent,
    MinMaxSliderComponent,
    CustomValuesComponent,
    PrettifyNumberComponent,
    DisabledComponent,
    CommonBorderCardComponent,
    CommonAbsoluteCardComponent,
    BorderPrimaryStateComponent,
    BorderWarningStateComponent,
    BorderSecondaryStateComponent,
    SimpleCardComponent,
    FlatCardComponent,
    IconHeadingComponent,
    WithoutShadowCardComponent,
    DarkCardComponent,
    CommonInfoCardComponent,
    TimelineComponent,
    BasicTimelineComponent,
    HoveringTimelineComponent,
    VariationTimelineComponent,
    HorizontalTimelineComponent,
    TimelineChartComponent,
    AudioTestingComponent,
    MeetUpComponent,
    ResolutionsComponent
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    BarRatingModule,
    NgxDropzoneModule,
    CarouselModule,
    NgxSliderModule,
    ImageCropperModule,
    FontAwesomeModule
  ]
})
export class BonusUiModule { }
