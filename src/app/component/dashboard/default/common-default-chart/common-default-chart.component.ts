import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-default-chart',
  templateUrl: './common-default-chart.component.html',
  styleUrls: ['./common-default-chart.component.scss']
})
export class CommonDefaultChartComponent {

  @Input() data: any;

}
