import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from '../partner-management/my-profile/my-profile.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'talent-profile',
        component : MyProfileComponent,
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentProfileRoutingModule { }
