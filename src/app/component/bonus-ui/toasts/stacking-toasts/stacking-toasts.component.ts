import { Component } from '@angular/core';
import { StackingToasts } from '../../../../shared/data/bonus-ui/toasts';

@Component({
  selector: 'app-stacking-toasts',
  templateUrl: './stacking-toasts.component.html',
  styleUrls: ['./stacking-toasts.component.scss']
})
export class StackingToastsComponent {

  public stackingData = StackingToasts;

  close(value: number) {
    const items = this.stackingData.filter(v => v.id == value)
    items[0].data = false;
  }

}
