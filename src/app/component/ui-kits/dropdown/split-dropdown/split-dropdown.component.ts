import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-split-dropdown',
  templateUrl: './split-dropdown.component.html',
  styleUrls: ['./split-dropdown.component.scss']
})
export class SplitDropdownComponent {

  public splitDropdownData = Data.SplitDropdown;

}
