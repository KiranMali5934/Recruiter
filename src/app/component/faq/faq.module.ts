import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticalVideosComponent } from './latest-artical-videos/latest-artical-videos.component';
import { LatestUpdateComponent } from './latest-update/latest-update.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuestionsComponent } from './questions/questions.component';
import { SerachArticalComponent } from './serach-artical/serach-artical.component';
import { TopCommonFaqComponent } from './top-common-faq/top-common-faq.component';

@NgModule({
  declarations: [
    FaqComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent,
    LatestUpdateComponent,
    NavigationComponent,
    QuestionsComponent,
    SerachArticalComponent,
    TopCommonFaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports : [
    TopCommonFaqComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent
  ]
})
export class FaqModule { }
