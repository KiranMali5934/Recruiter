import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentProfileRoutingModule } from './talent-profile-routing.module';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfileComponent } from '../partner-management/my-profile/my-profile.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TalentProfileRoutingModule,
    SharedModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(), 
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TalentProfileModule { }
