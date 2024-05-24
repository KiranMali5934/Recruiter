import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-outline-dark-light-alerts',
  templateUrl: './outline-dark-light-alerts.component.html',
  styleUrls: ['./outline-dark-light-alerts.component.scss']
})
export class OutlineDarkLightAlertsComponent {

  public outlinealertData = data.OutlineDarkAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }


}
