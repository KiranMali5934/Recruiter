import { Component } from '@angular/core';

@Component({
  selector: 'app-colors-schemes-toasts',
  templateUrl: './colors-schemes-toasts.component.html',
  styleUrls: ['./colors-schemes-toasts.component.scss']
})
export class ColorsSchemesToastsComponent {

  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }


}
