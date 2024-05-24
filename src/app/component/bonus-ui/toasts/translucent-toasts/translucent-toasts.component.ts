import { Component } from '@angular/core';
import { TranslucentToasts } from '../../../../shared/data/bonus-ui/toasts';

@Component({
  selector: 'app-translucent-toasts',
  templateUrl: './translucent-toasts.component.html',
  styleUrls: ['./translucent-toasts.component.scss']
})
export class TranslucentToastsComponent {

  public TranslucentToastsData = TranslucentToasts;

  close(value: number) {
    const items = this.TranslucentToastsData.filter(v => v.id == value)
    items[0].data = false;
  }

}
