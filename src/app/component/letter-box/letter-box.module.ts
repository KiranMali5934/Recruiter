import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPrintModule } from 'ngx-print';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LetterBoxRoutingModule } from './letter-box-routing.module';
import { LetterBoxComponent } from './letter-box.component';
import { LetterboxTopSectionComponent } from './letterbox-top-section/letterbox-top-section.component';
import { LetterboxSidebarComponent } from './letterbox-sidebar/letterbox-sidebar.component';
import { LetterboxUserComponent } from './letterbox-user/letterbox-user.component';
import { ComposeEmailComponent } from './letterbox-modal/compose-email/compose-email.component';
import { AddLabelComponent } from './letterbox-modal/add-label/add-label.component';
import { InterviewMailComponent } from './letterbox-user/interview-mail/interview-mail.component';
import { UserDetailsComponent } from './letterbox-user/interview-mail/user-details/user-details.component';

@NgModule({
  declarations: [
    LetterBoxComponent,
    LetterboxTopSectionComponent,
    LetterboxSidebarComponent,
    LetterboxUserComponent,
    ComposeEmailComponent,
    AddLabelComponent,
    InterviewMailComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    LetterBoxRoutingModule,
    AngularEditorModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgbModule
  ]
})
export class LetterBoxModule { }
