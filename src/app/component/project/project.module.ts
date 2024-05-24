import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { ProjectCreateFormComponent } from './create-new/project-create-form/project-create-form.component';
import { UploadFileComponent } from './create-new/upload-file/upload-file.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    CreateNewComponent,
    ProjectCreateFormComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    NgxDropzoneModule
  ]
})
export class ProjectModule { }
