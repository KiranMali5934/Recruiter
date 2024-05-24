import { Component } from '@angular/core';
import { ActivityLog } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  public activityLogData = ActivityLog; 
  public isopen :boolean =false;

  open(){
    this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
