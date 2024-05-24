import { Component } from '@angular/core';

@Component({
  selector: 'app-common-login-form',
  templateUrl: './common-login-form.component.html',
  styleUrls: ['./common-login-form.component.scss']
})
export class CommonLoginFormComponent {


  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
  
}
