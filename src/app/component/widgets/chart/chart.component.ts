import { Component } from '@angular/core';
import *as chartData from '../../../shared/data/widgets/chart'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

public chart1 = chartData.widgetChart
public chart2 = chartData.widgetChart2
public chart3 = chartData.widgetChart3

}
