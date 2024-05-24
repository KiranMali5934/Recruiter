import { Component } from '@angular/core';
import { StatusIndicator } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {

  public statusindicatorData = StatusIndicator;

}
