import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-bi-polar-line-chart-area',
  templateUrl: './bi-polar-line-chart-area.component.html',
  styleUrls: ['./bi-polar-line-chart-area.component.scss']
})
export class BiPolarLineChartAreaComponent {

  public chart4 = chartData.chart4;

}
