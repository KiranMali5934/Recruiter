import { Component } from '@angular/core';
import { defaultswitch } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-switches',
  templateUrl: './default-switches.component.html',
  styleUrls: ['./default-switches.component.scss']
})
export class DefaultSwitchesComponent {

  public switches = defaultswitch;

}
