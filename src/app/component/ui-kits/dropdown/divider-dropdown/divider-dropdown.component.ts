import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider-dropdown',
  templateUrl: './divider-dropdown.component.html',
  styleUrls: ['./divider-dropdown.component.scss']
})
export class DividerDropdownComponent {

  public dividerdropdownData = Data.DividerDropdown;

}
