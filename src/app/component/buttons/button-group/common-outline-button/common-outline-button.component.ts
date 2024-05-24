import { Component } from '@angular/core';
import { CommonOutlineButton } from '../../../../shared/data/buttons/button-group';

@Component({
  selector: 'app-common-outline-button',
  templateUrl: './common-outline-button.component.html',
  styleUrls: ['./common-outline-button.component.scss']
})
export class CommonOutlineButtonComponent {

  public commonData = CommonOutlineButton;

}
