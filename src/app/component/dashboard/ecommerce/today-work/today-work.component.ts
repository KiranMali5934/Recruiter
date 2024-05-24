import { Component } from '@angular/core';
import { todayWork } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';

@Component({
  selector: 'app-today-work',
  templateUrl: './today-work.component.html',
  styleUrls: ['./today-work.component.scss']
})
export class TodayWorkComponent {

  public todayWorkData = todayWork;

}
