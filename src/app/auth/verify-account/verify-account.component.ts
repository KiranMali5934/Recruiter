import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authloginservice } from 'src/app/shared/services/API/authlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.scss'
})
export class VerifyAccountComponent {
  token : string = "";
  email : string ="";


  constructor(
    private router :Router,
    private activatedRoute: ActivatedRoute,
     private authenticationService :Authloginservice) {
  }
  ngOnInit() {
    debugger
    if (this.activatedRoute.snapshot.queryParams["token"]) {
      this.token= this.activatedRoute.snapshot.queryParams["token"];
    }
    if (this.activatedRoute.snapshot.queryParams["email"]) {
      this.email= this.activatedRoute.snapshot.queryParams["email"];
    }
  }

  VerifyYourAccount(){
    
    if (this.token == "" || this.token == null || this.token == undefined) {
      Swal.fire({
        title: 'Error!',
        text: "token is required",
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }
    if (this.email == "" || this.email == null || this.email == undefined) {
      Swal.fire({
        title: 'Error!',
        text: "email is required",
        icon: 'error',
        confirmButtonText: 'Okay',
      });
 
      return;
    }
    let request = {
      token : this.token,
      email : this.email
    }
    this.authenticationService.VerifyYourAccount(request) .subscribe({
      next: (res) => {
        if (res) {
          if (res.Success) {
            Swal.fire({
              text: res.Message ,
              icon: 'success',
              buttonsStyling: false,
              confirmButtonText: 'Login',
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
        console.log(`register error: ${e}`)        
      },
      complete: () => {
        console.log(`talent register done:`)   
      },
    }); 
    
  }
  ResendEmail(){
    if (this.token == "" || this.token == null || this.token == undefined) {
      Swal.fire({
        title: 'Error!',
        text: "token is required",
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }
    if (this.email == "" || this.email == null || this.email == undefined) {
      Swal.fire({
        title: 'Error!',
        text: "email is required",
        icon: 'error',
        confirmButtonText: 'Okay',
      });
     return;
    }
    this.authenticationService.ResendEmail(this.token,this.email) .subscribe({
      next: (res) => {
        if (res) {
          if (res.Success) {
            Swal.fire({
              text: res.Message ,
              icon: 'success',
              buttonsStyling: false,
              confirmButtonText: 'Login',
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
      error: () => {
console.log('register error')   
   },
      complete: () => {
        console.log(`talent register done:`)   

      },
    }); 
  }

}
