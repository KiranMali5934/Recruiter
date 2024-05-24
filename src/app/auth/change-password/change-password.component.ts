import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Authloginservice } from 'src/app/shared/services/API/authlogin.service';
import { Logger } from 'src/app/shared/services/API/logger-service.service';
import Swal from 'sweetalert2';
import { ConfirmPasswordValidator } from '../confirm-password.validation';
const log = new Logger('Login');
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  resetPasswordForm!: FormGroup;
  public show: boolean = false;
  error: string | undefined;
  token : string = "";
  email : string ="";
password :any;
confirmpassword:any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authenticationService: Authloginservice,
  ) {
    this.createForm();
  }
  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams["token"]) {
      this.token= this.activatedRoute.snapshot.queryParams["token"];
    }
    if (this.activatedRoute.snapshot.queryParams["email"]) {
      this.email= this.activatedRoute.snapshot.queryParams["email"];
    }
  }
  private createForm() {
    this.resetPasswordForm = this.formBuilder.group(
      {
        Password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
        ConfirmPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        ],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }
  get f() {
    return this.resetPasswordForm.controls;
  }
  showPassword() {
    this.show = !this.show;
  }
  submit(){
if (this.resetPasswordForm.invalid) {
  return;
}
    if (this.token == "" || this.token == null || this.token == undefined) {
      Swal.fire({
        title: 'Error!',
        text: 'token is required',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }
    if (this.email == "" || this.email == null || this.email == undefined) {
      Swal.fire({
        title: 'Error!',
        text: 'email is required',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      
      return;
    }
    var password  = this.resetPasswordForm.value["Password"];;
    const RegisterUser$ = this.authenticationService.ResetPassword(this.token,this.email,password);
    RegisterUser$.pipe(
      finalize(() => {
      })
    ).subscribe({
      next: (res) => {
        if (res) {
          if (res.Success) {
            Swal.fire({
              html: res.Message,
              icon: 'success',
              buttonsStyling: false,
              confirmButtonText: 'Close',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
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
      error: (e) => {
        this.error = e;
        log.debug(`ForgotPassword error: ${e}`);
      },
      complete: () => {
        log.debug(`ForgotPassword done:`);
      },
    }); 
  }
  }

