import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogCommentComponent } from './blog-single/blog-comment/blog-comment.component';

@NgModule({
  declarations: [
    BlogAddPostComponent,
    BlogDetailsComponent,
    BlogSingleComponent,
    BlogCommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgSelectModule,
    NgxDropzoneModule,
    AngularEditorModule,
    SharedModule,
    FormsModule
  ],
  exports : [
    BlogCommentComponent
  ]
})
export class BlogModule { }
