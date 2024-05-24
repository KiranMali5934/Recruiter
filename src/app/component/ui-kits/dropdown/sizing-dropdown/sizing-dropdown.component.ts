import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-sizing-dropdown',
  templateUrl: './sizing-dropdown.component.html',
  styleUrls: ['./sizing-dropdown.component.scss']
})
export class SizingDropdownComponent {

  public sizingdropdownData = Data.DropdownSizing;

}
