import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterBoxComponent } from './letter-box.component';

const routes: Routes = [
  {
    path: '',
    component:LetterBoxComponent ,
    data : {
      breadcrumb : 'Letter Box'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterBoxRoutingModule { }
