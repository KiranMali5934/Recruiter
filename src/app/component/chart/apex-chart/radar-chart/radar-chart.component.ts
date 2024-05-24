import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  public radarChart = chartData.radarChart

}
