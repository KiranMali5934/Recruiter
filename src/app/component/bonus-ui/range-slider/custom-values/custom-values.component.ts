import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-custom-values',
  templateUrl: './custom-values.component.html',
  styleUrls: ['./custom-values.component.scss']
})
export class CustomValuesComponent {

  public options2Value: number = 4;

  options2: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: 'Jan' },
      { value: 3, legend: 'Feb' },
      { value: 4, legend: 'Mar' },
      { value: 5, legend: 'Apr' },
      { value: 2, legend: 'May' },
      { value: 6, legend: 'Jun' },
      { value: 7, legend: 'July' },
      { value: 8, legend: 'Aug' },
      { value: 9, legend: 'Sept' },
      { value: 10, legend: 'Oct' },
      { value: 11, legend: 'Nov' },
      { value: 12, legend: 'Dec' },
    ]
  };

}
