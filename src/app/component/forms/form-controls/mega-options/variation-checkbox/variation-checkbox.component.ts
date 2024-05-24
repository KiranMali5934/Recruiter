import { Component } from '@angular/core';
import { checkBox, themeSales } from '../../../../../shared/data/forms/form-controls/mega-options';

@Component({
  selector: 'app-variation-checkbox',
  templateUrl: './variation-checkbox.component.html',
  styleUrls: ['./variation-checkbox.component.scss']
})
export class VariationCheckboxComponent {

  public checkboxData = checkBox;
  public themeData = themeSales;

}
