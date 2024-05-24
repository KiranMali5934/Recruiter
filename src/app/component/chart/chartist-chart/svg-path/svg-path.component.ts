import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-svg-path',
  templateUrl: './svg-path.component.html',
  styleUrls: ['./svg-path.component.scss']
})
export class SvgPathComponent {

  public chart2 = chartData.chart2;

}
