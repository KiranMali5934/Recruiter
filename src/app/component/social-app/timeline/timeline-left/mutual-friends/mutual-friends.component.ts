import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-mutual-friends',
  templateUrl: './mutual-friends.component.html',
  styleUrls: ['./mutual-friends.component.scss']
})
export class MutualFriendsComponent {

  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;

}
