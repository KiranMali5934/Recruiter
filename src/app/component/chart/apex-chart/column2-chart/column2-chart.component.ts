import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-column2-chart',
  templateUrl: './column2-chart.component.html',
  styleUrls: ['./column2-chart.component.scss']
})
export class Column2ChartComponent {

  public columnChart2 = chartData.columnChart2;

}
