import { Component } from '@angular/core';

@Component({
  selector: 'app-common-register-form',
  templateUrl: './common-register-form.component.html',
  styleUrls: ['./common-register-form.component.scss']
})
export class CommonRegisterFormComponent {

  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }


}
