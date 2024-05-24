import { Component } from '@angular/core';
import { TeamActivity } from '../../../../shared/data/dashboard/online-course/online-course';

@Component({
  selector: 'app-team-activity',
  templateUrl: './team-activity.component.html',
  styleUrls: ['./team-activity.component.scss']
})
export class TeamActivityComponent {

  public TeamActivityData = TeamActivity;

}
