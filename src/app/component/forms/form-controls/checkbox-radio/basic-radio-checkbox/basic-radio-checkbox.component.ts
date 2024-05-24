import { Component } from '@angular/core';
import { basicCheckbox, simpleRadio } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-basic-radio-checkbox',
  templateUrl: './basic-radio-checkbox.component.html',
  styleUrls: ['./basic-radio-checkbox.component.scss']
})
export class BasicRadioCheckboxComponent {

  public basicItem = basicCheckbox;
  public radioData = simpleRadio;

}
