import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public _credentials: Credentials | null = null;

  constructor(private router: Router,  private credentialsService: CredentialsService) {
    this._credentials = this.credentialsService.credentials

   }

  public show: boolean = false;

  open() {
    this.show = !this.show
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

}
