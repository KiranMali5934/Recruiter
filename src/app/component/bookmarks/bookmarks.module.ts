import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarkSidemenuComponent } from './bookmark-sidemenu/bookmark-sidemenu.component';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarkDataComponent } from './bookmark-data/bookmark-data.component';
import { AddTagComponent } from './bookmark-modal/add-tag/add-tag.component';
import { EditBookmarkComponent } from './bookmark-modal/edit-bookmark/edit-bookmark.component';
import { NewBookmarkComponent } from './bookmark-modal/new-bookmark/new-bookmark.component';

@NgModule({
  declarations: [
    BookmarkSidemenuComponent,
    BookmarksComponent,
    BookmarkDataComponent,
    AddTagComponent,
    EditBookmarkComponent,
    NewBookmarkComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BookmarksModule { }
