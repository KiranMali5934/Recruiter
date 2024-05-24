import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.component.html',
  styleUrls: ['./area-spaline-chart.component.scss']
})
export class AreaSpalineChartComponent {

  public areaSpalineChart = chartData.areaSpalineChart;

}
