import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrls: ['./lines-chart.component.scss']
})
export class LinesChartComponent {
  
  public lineChart = chartData.lineChart;

}
