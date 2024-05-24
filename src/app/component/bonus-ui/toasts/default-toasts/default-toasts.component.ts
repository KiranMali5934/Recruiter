import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toasts',
  templateUrl: './default-toasts.component.html',
  styleUrls: ['./default-toasts.component.scss']
})
export class DefaultToastsComponent {

  public default: boolean = true;

  close() {
    this.default = false;
  }

}
