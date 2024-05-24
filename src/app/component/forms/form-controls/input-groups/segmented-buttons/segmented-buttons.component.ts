import { Component } from '@angular/core';

@Component({
  selector: 'app-segmented-buttons',
  templateUrl: './segmented-buttons.component.html',
  styleUrls: ['./segmented-buttons.component.scss']
})
export class SegmentedButtonsComponent {

  public show: boolean = false;
  public show2: boolean = false;

  openMenu() {
    this.show = !this.show
  }

  openMenu2() {
    this.show2 = !this.show2
  }

}
