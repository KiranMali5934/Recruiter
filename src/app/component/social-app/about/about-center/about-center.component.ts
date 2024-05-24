import { Component } from '@angular/core';
import * as data from '../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-about-center',
  templateUrl: './about-center.component.html',
  styleUrls: ['./about-center.component.scss']
})
export class AboutCenterComponent {

  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;

}
