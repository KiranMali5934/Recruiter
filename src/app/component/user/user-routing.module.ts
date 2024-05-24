import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardsComponent } from './user-cards/user-cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-profile',
        component: UserProfileComponent,
        data: {
          title: "Users Profile",
          breadcrumb: "Users Profile",
        }
      },
      {
        path: 'profile-edit',
        component: UserEditComponent,
        data: {
          title: "Edit Profile",
          breadcrumb: "Edit Profile",
        }
      },
      {
        path: 'users-cards',
        component: UserCardsComponent,
        data: {
          title: "User Cards",
          breadcrumb: "User Cards",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
