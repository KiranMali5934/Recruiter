import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.scss']
})
export class DisabledComponent {

  public value3: number = 550;
  options4: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };

}
