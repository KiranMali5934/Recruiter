import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-common-widget-chart',
  templateUrl: './common-widget-chart.component.html',
  styleUrls: ['./common-widget-chart.component.scss']
})
export class CommonWidgetChartComponent {

  @Input() data: ChartOptions| any;

}
