import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'private-chat',
      component: PrivateChatComponent,
      data: {
        title: "Private chat",
        breadcrumb: "Private chat",
      }
    },
    {
      path: 'group-chat',
      component: GroupChatComponent,
      data: {
        title: "Group chat",
        breadcrumb: "Group chat",
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
