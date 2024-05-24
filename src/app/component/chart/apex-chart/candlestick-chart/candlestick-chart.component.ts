import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent {

  public candlestickChart = chartData.candlestickChart;

}
