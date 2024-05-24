import { Component } from '@angular/core';
import { checkboxData } from '../../../../shared/data/buttons/button-group';

@Component({
  selector: 'app-checkbox-button-group',
  templateUrl: './checkbox-button-group.component.html',
  styleUrls: ['./checkbox-button-group.component.scss']
})
export class CheckboxButtonGroupComponent {

  public checkBox = checkboxData;

}
