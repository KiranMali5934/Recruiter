import { Component, Input } from '@angular/core';
import { UserVisits } from '../../../../shared/data/dashboard/online-course/online-course-chart';

@Component({
  selector: 'app-user-visits-day',
  templateUrl: './user-visits-day.component.html',
  styleUrls: ['./user-visits-day.component.scss']
})
export class UserVisitsDayComponent {

  @Input()  public uservisist :boolean =true;
  
  public UserVisitsData = UserVisits;


}
