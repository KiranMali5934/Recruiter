import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.scss']
})
export class SteplineChartComponent {
  
  public steplineChart = chartData.steplineChart;

}
