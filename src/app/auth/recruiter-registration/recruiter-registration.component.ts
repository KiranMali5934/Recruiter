import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { AgencyModel } from 'src/app/shared/model/agency.model';
import { RecruiterModel } from 'src/app/shared/model/recruiter.model';
import { Authloginservice } from 'src/app/shared/services/API/authlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recruiter-registration',
  templateUrl: './recruiter-registration.component.html',
  styleUrl: './recruiter-registration.component.scss'
})
export class RecruiterRegistrationComponent {
  public recruiterModel = new AgencyModel();
  public validate = false;
  public tooltipValidation = false;
  isLoading = false;
  error: string | undefined;
  DisplayImage_ProfilePicPath: any;
  show = false;
  showconfirmPassword = false;
  password: string = '';
  registrationForm: any;
  constructor(
    private router :Router,   
    private route: ActivatedRoute,
    private authenticationService: Authloginservice ) {}
  showPassword() {
    this.show = !this.show;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
  toggleConfirmPasswordVisibility() {
    this.showconfirmPassword = !this.showconfirmPassword;
  }
  submit() {
    debugger
    // this.isLoading = true;
    this.recruiterModel.UserTypeCode = 'Recruiter';
    this.authenticationService.RegisterUser(this.recruiterModel).
      subscribe(
      (res: any | undefined) => {
        if (res) {
          if (res.Success) {
            Swal.fire({
              html: res.Message ,
              confirmButtonText: 'Ok, got it!',
              icon: 'success',
              confirmButtonColor: 'var(--theme-deafult)',
            }).then((result) => {
                  this.router.navigate(['/auth/login']);
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: res.Message,
              icon: 'error',
              confirmButtonText: 'Okay',
            });
          }
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        }
      },
    );
  }

}
