import { Component } from '@angular/core';

@Component({
  selector: 'app-live-toast',
  templateUrl: './live-toast.component.html',
  styleUrls: ['./live-toast.component.scss']
})
export class LiveToastComponent {

  public topright: boolean = false;
  public boottomright: boolean = false;
  public topleft: boolean = false;
  public boottomleft: boolean = false;

  open() {
    this.topright = true;
  }
  close() {
    this.topright = false;
  }
  open2() {
    this.boottomright = true;
  }
  close2() {
    this.boottomright = false;
  }
  open3() {
    this.topleft = true;
  }

  close3() {
    this.topleft = false;
  }

  open4() {
    this.boottomleft = true;
  }
  close4() {
    this.boottomleft = false;
  }

}
