import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-widgets-chart',
  templateUrl: './common-widgets-chart.component.html',
  styleUrls: ['./common-widgets-chart.component.scss']
})
export class CommonWidgetsChartComponent {

  @Input() data :any

}
