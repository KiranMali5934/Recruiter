import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-advanced-smil',
  templateUrl: './advanced-smil.component.html',
  styleUrls: ['./advanced-smil.component.scss']
})
export class AdvancedSmilComponent {

  public chart1 = chartData.chart1;

}
