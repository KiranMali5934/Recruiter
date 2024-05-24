import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-default-range-slider',
  templateUrl: './default-range-slider.component.html',
  styleUrls: ['./default-range-slider.component.scss']
})
export class DefaultRangeSliderComponent {

  public value: number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000
  };

}
