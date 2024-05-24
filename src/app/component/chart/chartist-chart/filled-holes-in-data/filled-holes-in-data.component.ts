import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';

@Component({
  selector: 'app-filled-holes-in-data',
  templateUrl: './filled-holes-in-data.component.html',
  styleUrls: ['./filled-holes-in-data.component.scss']
})
export class FilledHolesInDataComponent {

  public chart12 = chartData.chart12;

}
