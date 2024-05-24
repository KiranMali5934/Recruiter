import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.scss']
})
export class SimpleLineChartComponent {

  public chart10 = chartData.chart10;

}
