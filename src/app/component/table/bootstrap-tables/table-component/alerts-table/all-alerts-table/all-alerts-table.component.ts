import { Component } from '@angular/core';

@Component({
  selector: 'app-all-alerts-table',
  templateUrl: './all-alerts-table.component.html',
  styleUrls: ['./all-alerts-table.component.scss']
})
export class AllAlertsTableComponent {

  public alerts: boolean = true;
  public alerts2: boolean = true;

  close() {
    this.alerts = false;
  }

  close2() {
    this.alerts2 = false;
  }


}
