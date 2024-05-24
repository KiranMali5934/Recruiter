import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-contents-dropdown',
  templateUrl: './justify-contents-dropdown.component.html',
  styleUrls: ['./justify-contents-dropdown.component.scss']
})
export class JustifyContentsDropdownComponent {

  public justifyData = Data.JustifyContents;

}
