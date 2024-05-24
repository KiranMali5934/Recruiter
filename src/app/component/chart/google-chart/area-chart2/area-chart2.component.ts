import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-area-chart2',
  templateUrl: './area-chart2.component.html',
  styleUrls: ['./area-chart2.component.scss']
})
export class AreaChart2Component {

  public areaChart2 = chartData.areaChart2;


}
