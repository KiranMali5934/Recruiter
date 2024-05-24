import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';

@Component({
  selector: 'app-user-gorup-chat',
  templateUrl: './user-gorup-chat.component.html',
  styleUrls: ['./user-gorup-chat.component.scss']
})
export class UserGorupChatComponent {

  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
  
  clickOutside():void { 
    this.isOpen = false;
  }

}
