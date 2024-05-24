import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfile1Component } from './user-profile/user-profile1/user-profile1.component';
import { UserProfile2Component } from './user-profile/user-profile2/user-profile2.component';
import { UserProfile3Component } from './user-profile/user-profile3/user-profile3.component';
import { UserProfile4Component } from './user-profile/user-profile4/user-profile4.component';
import { UserProfile5Component } from './user-profile/user-profile5/user-profile5.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MyProfileComponent } from './user-edit/my-profile/my-profile.component';
import { EditProfileFormComponent } from './user-edit/edit-profile-form/edit-profile-form.component';
import { AddProjectsUploadComponent } from './user-edit/add-projects-upload/add-projects-upload.component';
import { UserCardsComponent } from './user-cards/user-cards.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfile1Component,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    UserProfile5Component,
    UserEditComponent,
    MyProfileComponent,
    EditProfileFormComponent,
    AddProjectsUploadComponent,
    UserCardsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgbModule,
    GalleryModule
  ]
})
export class UserModule { }
