import { Component } from '@angular/core';
import { BorderCheckbox, IconsCheckbox, FilledCheckbox } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {

  public borders = BorderCheckbox;
  public icons = IconsCheckbox;
  public filled = FilledCheckbox;

}
