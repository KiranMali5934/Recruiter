import { Component } from '@angular/core';
import { UncheckedSwitch } from '../../../../../shared/data/forms/forms-widgets/switch';

@Component({
  selector: 'app-unchecked-switch',
  templateUrl: './unchecked-switch.component.html',
  styleUrls: ['./unchecked-switch.component.scss']
})
export class UncheckedSwitchComponent {

  public unchakedData = UncheckedSwitch;

}
