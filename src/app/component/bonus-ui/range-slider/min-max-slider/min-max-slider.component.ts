import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';


@Component({
  selector: 'app-min-max-slider',
  templateUrl: './min-max-slider.component.html',
  styleUrls: ['./min-max-slider.component.scss']
})
export class MinMaxSliderComponent {

  public value2: number = 550;
  public maxvalue: number = 100;

  options: Options = {
    floor: 100,
    ceil: 1000
  };

}
