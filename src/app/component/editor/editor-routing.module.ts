import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'ngx-editors',
        component :NgxEditorComponent,
        data : {
          title : 'Ngx Editor',
          breadcrumb : 'Ngx Editor'
        }
      },
      {
        path : 'mde-editors',
        component : MdeEditorsComponent,
        data : {
          title : 'MDE Editor',
          breadcrumb : 'MDE Editor'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
