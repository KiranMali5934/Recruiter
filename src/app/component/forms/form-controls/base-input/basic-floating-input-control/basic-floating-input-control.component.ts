import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-floating-input-control',
  templateUrl: './basic-floating-input-control.component.html',
  styleUrls: ['./basic-floating-input-control.component.scss']
})
export class BasicFloatingInputControlComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }

}
