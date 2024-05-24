import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

const routes: Routes = [
  {
    path:'',
    component:SocialAppComponent,
    data: {
      title: 'Social App',
      breadcrumb: 'Social App'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialAppRoutingModule { }
