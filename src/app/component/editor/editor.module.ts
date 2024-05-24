import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../shared/shared.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

import { EditorRoutingModule } from './editor-routing.module';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';

@NgModule({
  declarations: [
    MdeEditorsComponent,
    NgxEditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    SharedModule,
    FormsModule,
    AngularEditorModule,
    NgxEditorModule
  ]
})
export class EditorModule { }
