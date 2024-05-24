import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PrivateChatComponent } from './private-chat/private-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ContactChatTabComponent } from './contact-chat-tab/contact-chat-tab.component';
import { UserGorupChatComponent } from './group-chat/user-gorup-chat/user-gorup-chat.component';
import { UserPrivateChatComponent } from './private-chat/user-private-chat/user-private-chat.component';
import { ContactSearchComponent } from './contact-chat-tab/contact-search/contact-search.component';

@NgModule({
  declarations: [
    PrivateChatComponent,
    GroupChatComponent,
    ContactChatTabComponent,
    UserGorupChatComponent,
    UserPrivateChatComponent,
    ContactSearchComponent 
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgbModule
  ]
})
export class ChatModule { }
