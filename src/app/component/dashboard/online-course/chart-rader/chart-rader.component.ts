import { Component } from '@angular/core';
import { raderchart } from '../../../../shared/data/dashboard/online-course/online-course-chart';

@Component({
  selector: 'app-chart-rader',
  templateUrl: './chart-rader.component.html',
  styleUrls: ['./chart-rader.component.scss']
})
export class ChartRaderComponent {

  public raderchartData = raderchart;

}
