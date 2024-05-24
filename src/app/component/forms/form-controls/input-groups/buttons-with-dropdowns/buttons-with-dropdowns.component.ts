import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-with-dropdowns',
  templateUrl: './buttons-with-dropdowns.component.html',
  styleUrls: ['./buttons-with-dropdowns.component.scss']
})
export class ButtonsWithDropdownsComponent {

  public open: boolean = false;
  public open2: boolean = false;
  public open3: boolean = false;
  public open4: boolean = false;

  openMenu() {
    this.open = !this.open;
  }

  openMenu2() {
    this.open2 = !this.open2
  }

  openMenu3() {
    this.open3 = !this.open3
  }

  openMenu4() {
    this.open4 = !this.open4
  }

}
