import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FileManagerRoutingModule } from './file-manager-routing.module';

import { FileManagerComponent } from './file-manager.component';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';
import { FileItemComponent } from './file-item/file-item.component';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerSidebarComponent,
    FileItemComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule
  ]
})
export class FileManagerModule { }
