import { Component } from '@angular/core';
import { Disabledoutlineswitch } from '../../../../../shared/data/forms/forms-widgets/switch';

@Component({
  selector: 'app-disabled-outline-switch',
  templateUrl: './disabled-outline-switch.component.html',
  styleUrls: ['./disabled-outline-switch.component.scss']
})
export class DisabledOutlineSwitchComponent {

  public disableoutline = Disabledoutlineswitch;

}
