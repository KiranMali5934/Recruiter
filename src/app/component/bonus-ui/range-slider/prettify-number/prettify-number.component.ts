import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-prettify-number',
  templateUrl: './prettify-number.component.html',
  styleUrls: ['./prettify-number.component.scss']
})
export class PrettifyNumberComponent {

  public value3: number = 2000;

  options3: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100
  };

}
