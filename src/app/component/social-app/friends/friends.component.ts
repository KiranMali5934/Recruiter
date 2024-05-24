import { Component } from '@angular/core';
import * as data from '../../../shared/data/user/users-card';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  public friendsData = data.userCard;

}
