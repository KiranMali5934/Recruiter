import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  templateUrl: './rounded-dropdown.component.html',
  styleUrls: ['./rounded-dropdown.component.scss']
})
export class RoundedDropdownComponent {

  public roundedDropdownData = Data.RoundedDropdown;

}
