import { Component } from '@angular/core';
import { monthlyHistoryData } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-monthly-history',
  templateUrl: './monthly-history.component.html',
  styleUrls: ['./monthly-history.component.scss']
})
export class MonthlyHistoryComponent {

  public MonthlyHistoryData = monthlyHistoryData;

}
