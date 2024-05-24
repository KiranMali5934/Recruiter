import { Component } from '@angular/core';
import { CommonButtonGroup } from '../../../../shared/data/buttons/button-group';

@Component({
  selector: 'app-common-button-gorup',
  templateUrl: './common-button-gorup.component.html',
  styleUrls: ['./common-button-gorup.component.scss']
})
export class CommonButtonGorupComponent {

  public commonData = CommonButtonGroup;

}
