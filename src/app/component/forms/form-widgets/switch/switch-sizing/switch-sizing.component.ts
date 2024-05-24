import { Component } from '@angular/core';
import { switchSizeing } from '../../../../../shared/data/forms/forms-widgets/switch';

@Component({
  selector: 'app-switch-sizing',
  templateUrl: './switch-sizing.component.html',
  styleUrls: ['./switch-sizing.component.scss']
})
export class SwitchSizingComponent {

  public sizeingData = switchSizeing;

}
