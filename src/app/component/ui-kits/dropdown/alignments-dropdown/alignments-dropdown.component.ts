import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignments-dropdown',
  templateUrl: './alignments-dropdown.component.html',
  styleUrls: ['./alignments-dropdown.component.scss']
})
export class AlignmentsDropdownComponent {

  public alignmentsDropdownData = Data.AlignmentsDropdown;

}
