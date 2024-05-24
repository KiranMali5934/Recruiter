import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Authloginservice } from 'src/app/shared/services/API/authlogin.service';
import { Logger } from 'src/app/shared/services/API/logger-service.service';
import Swal from 'sweetalert2';
const log = new Logger('ForgotPassword');
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
  error: string | undefined;
  forgotPasswordForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: Authloginservice
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      Email: [
        '',
        [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
    });
  }
  get f() {
    return this.forgotPasswordForm.controls;
  }

  submit() {
    this.isLoading = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    const RegisterUser$ = this.authenticationService.ForgotPassword(this.forgotPasswordForm.value);
    RegisterUser$.pipe(
      finalize(() => {
        this.forgotPasswordForm.markAsPristine();
        this.isLoading = false;
      })
      //untilDestroyed(this)
    ).subscribe({
      next: (res) => {
        if (res) {
          if (res.Success) {
            Swal.fire({
              html: res.Message + "<br/> Please check you mail !!!",
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
