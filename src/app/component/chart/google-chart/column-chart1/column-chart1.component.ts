import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-column-chart1',
  templateUrl: './column-chart1.component.html',
  styleUrls: ['./column-chart1.component.scss']
})
export class ColumnChart1Component {
  
  public columnChart1 = chartData.columnChart1;


}
