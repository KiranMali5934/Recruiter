import { Component } from '@angular/core';

@Component({
  selector: 'app-left-border-alert',
  templateUrl: './left-border-alert.component.html',
  styleUrls: ['./left-border-alert.component.scss']
})
export class LeftBorderAlertComponent {

  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }

}
