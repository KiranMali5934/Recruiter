import { Component, Input } from '@angular/core';
import { addFriends } from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-common-add-friends',
  templateUrl: './common-add-friends.component.html',
  styleUrls: ['./common-add-friends.component.scss']
})
export class CommonAddFriendsComponent {

  @Input() data: addFriends;

}
