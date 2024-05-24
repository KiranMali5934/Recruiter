import { Component } from '@angular/core';
import { defaultRedio } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-radio',
  templateUrl: './default-radio.component.html',
  styleUrls: ['./default-radio.component.scss']
})
export class DefaultRadioComponent {

  public redio = defaultRedio;

}
