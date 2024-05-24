import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { SharedModule } from '../../shared/shared.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactSidemenuComponent } from './contact-sidemenu/contact-sidemenu.component';
import { AddCategoryComponent } from './contact-modal/add-category/add-category.component';
import { NewContactComponent } from './contact-modal/new-contact/new-contact.component';
import { PrintComponent } from './contact-modal/print/print.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfileDataComponent } from './personal/profile-data/profile-data.component';
import { AddressContantComponent } from './personal/profile-data/edit-profile/address-contant/address-contant.component';
import { PersonalContantComponent } from './personal/profile-data/edit-profile/personal-contant/personal-contant.component';
import { GeneralComponent } from './personal/profile-data/edit-profile/general/general.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactSidemenuComponent,
    AddCategoryComponent,
    NewContactComponent,
    PrintComponent,
    PersonalComponent,
    ProfileDataComponent,
    AddressContantComponent,
    PersonalContantComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [
    NgbActiveModal,
  ]
})
export class ContactsModule { }
