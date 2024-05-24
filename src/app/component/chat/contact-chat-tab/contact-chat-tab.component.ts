import { Component } from '@angular/core';
import { Chats, Contacts } from '../../../shared/data/chat/chat';

@Component({
  selector: 'app-contact-chat-tab',
  templateUrl: './contact-chat-tab.component.html',
  styleUrls: ['./contact-chat-tab.component.scss']
})
export class ContactChatTabComponent {

  public active = 1;
  public privateData = Chats;
  public contactsData = Contacts;
  public openid: number;
  public isOpen: boolean = false;

  openMenu(id: number) {
    this.contactsData.filter(da => {
      if (da.id == id) {
        this.openid = this.openid !== da.id ? da.id : 0;
        this.isOpen = !this.isOpen
      }
    })
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
