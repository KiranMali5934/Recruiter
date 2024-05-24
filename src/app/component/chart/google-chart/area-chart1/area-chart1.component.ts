import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-area-chart1',
  templateUrl: './area-chart1.component.html',
  styleUrls: ['./area-chart1.component.scss']
})
export class AreaChart1Component {

  public areaChart1 = chartData.areaChart1;


}
