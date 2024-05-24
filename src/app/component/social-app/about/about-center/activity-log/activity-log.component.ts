import { Component} from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  public activityLogData = data.activityLog;

}
