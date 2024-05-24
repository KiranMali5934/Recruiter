import { Component } from '@angular/core';
import { radioButton } from '../../../../shared/data/buttons/button-group';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent {

  public radiobuttonData = radioButton;

}
