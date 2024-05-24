import { Component } from '@angular/core';
import { Message } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  public MessageData = Message;
  public openid: number;

  openMenu(id: number) {
    this.MessageData.filter((data) => {
      if (data.id == id) {
        this.openid = this.openid !== data.id ? data.id : 0;
      }
    })
  }

}
