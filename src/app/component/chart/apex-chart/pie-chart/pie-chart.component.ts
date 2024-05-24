import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  public pieChart = chartData.pieChart;

}
