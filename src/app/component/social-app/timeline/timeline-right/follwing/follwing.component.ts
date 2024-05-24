import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-follwing',
  templateUrl: './follwing.component.html',
  styleUrls: ['./follwing.component.scss']
})
export class FollwingComponent {

  public followingData = data.Following;

}
