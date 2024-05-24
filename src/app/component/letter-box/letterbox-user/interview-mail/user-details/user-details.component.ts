import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  public isOpen: boolean = false;
  public htmlContent = '';

  openMenu() {
    this.isOpen = !this.isOpen;
  }

}
