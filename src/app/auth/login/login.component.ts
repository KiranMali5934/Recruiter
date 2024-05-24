import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { Role } from 'src/app/shared/model/role.model';
import { Authloginservice } from 'src/app/shared/services/API/authlogin.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // const log = new LoggerService('Login');
  public show: boolean = false;
  public loginForm: FormGroup;
  error: string | undefined;
  constructor(private fb: FormBuilder, public router: Router,private authloginservice: Authloginservice,private credentialsService : CredentialsService) {

    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.maxLength(20), 
      ])],
    });
  }

  formBuild(){
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.maxLength(20), 
      ])],
    }); 
  }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
   debugger
    if(this.loginForm.valid){
      this.authloginservice.login(this.loginForm.value).subscribe(
        resp =>
         {
          if (!resp.IsUserFound) {
            Swal.fire({
              title: 'Error!',
              text: resp.Message,
              icon: 'error',
              confirmButtonText: 'Close',
            });
            return;
          }
          if (!resp.IsActive) {
            Swal.fire({
              title: 'Error!',
              text: resp.Message,
              icon: 'error',
              confirmButtonText: 'Close',
            });
            return;
          }
          if (!resp.EmailConfirmed) {
            Swal.fire({
              title: 'Error!',
              text: resp.Message,
              icon: 'error',
              buttonsStyling: false,
              confirmButtonText: 'Ok, got it!',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
            }).then((result) => {
              debugger
              if(result.isConfirmed){
              this.router.navigate(['/verify-account']);}
              else{

              }
            });
            return;
          }
        
          if (resp?.Token != '') {
            // log.debug(`${resp?.Email} successfully logged in`);
            
            this.credentialsService.setCredentials(resp, true);

            if (resp.UserTypeCode.trim() ==  Role.SuperAdmin) {
              
                this.router.navigate(['/super-admin/dashboard']); 
            }  
            // else if (resp.UserTypeCode.trim() == Role.Admin) {
 
            //   this.router.navigate(['/admin/dashboard']);
            // }
            // else if (resp.UserTypeCode.trim() == Role.Client) {
           
            //   this.router.navigate(['/dashboard/default']);
            // }
            //  if (resp.UserTypeCode.trim() == Role.Talent) {
            //   this.router.navigate(['/dashboard/default']); 
            // }
            else if (resp.UserTypeCode.trim() == Role.Recruiter) {
             
              this.router.navigate(['/dashboard/recruiter']);
            }
            // else if (resp.UserTypeCode.trim() == Role.Recruiter) {
            //   this.router.navigate(['/recruiter/dashboard']);
            // }
            // else if (resp.UserTypeCode.trim() == Role.Agency) {
            //   this.router.navigate(['/agency/dashboard']);
            // }
            // else if (resp.UserTypeCode.trim() == Role.Subuser) {
            //   this.router.navigate(['/sub-user/dashboard']);
            // }
          }

          else{
            Swal.fire({
              title: 'Error!',
              text: resp.Message,
              icon: 'error',
              buttonsStyling: false,
              confirmButtonText: 'Ok, got it!',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
            }).then((result) => {
                window.location.reload();
            });
          }
        },
        (error) => {
          // log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
         
   
    }

}
}
