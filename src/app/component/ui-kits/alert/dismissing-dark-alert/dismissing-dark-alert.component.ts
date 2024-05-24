import { Component } from '@angular/core';

@Component({
  selector: 'app-dismissing-dark-alert',
  templateUrl: './dismissing-dark-alert.component.html',
  styleUrls: ['./dismissing-dark-alert.component.scss']
})
export class DismissingDarkAlertComponent {

  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }

}
