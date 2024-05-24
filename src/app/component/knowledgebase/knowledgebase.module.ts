import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FaqModule } from '../faq/faq.module';

import { BrowseArticalCategoriesComponent } from './browse-artical-categories/browse-artical-categories.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { KnowledgebaseComponent } from './knowledgebase.component';

@NgModule({
  declarations: [
    BrowseArticalCategoriesComponent,
    KnowledgebaseFooterDataComponent,
    KnowledgebaseTopDataComponent,
    KnowledgebaseComponent
  ],
  imports: [
    CommonModule,
    KnowledgebaseRoutingModule,
    SharedModule,
    FaqModule,
  ]
})
export class KnowledgebaseModule { }
