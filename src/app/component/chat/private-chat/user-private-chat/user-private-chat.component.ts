import { Component } from '@angular/core';
import { massage } from '../../../../shared/data/chat/chat';

@Component({
  selector: 'app-user-private-chat',
  templateUrl: './user-private-chat.component.html',
  styleUrls: ['./user-private-chat.component.scss']
})
export class UserPrivateChatComponent {
  
  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
  
  clickOutside():void { 
    this.isOpen = false;
  }

}
