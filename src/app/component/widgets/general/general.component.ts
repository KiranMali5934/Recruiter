import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  public totalrevenuchart = chartData.revenueChart
 public totalorderchart = chartData.TotalOrderChart
  
}
