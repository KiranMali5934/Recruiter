import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonLoginFormComponent } from './common-login-form/common-login-form.component';
import { CommonRegisterFormComponent } from './common-register-form/common-register-form.component';
import { LoginSimpleComponent } from './login-simple/login-simple.component';
import { LoginBgImageComponent } from './login-bg-image/login-bg-image.component';
import { LoginImageTwoComponent } from './login-image-two/login-image-two.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';
import { LoginTooltipComponent } from './login-tooltip/login-tooltip.component';
import { LoginSweetalertComponent } from './login-sweetalert/login-sweetalert.component';
import { RegisterBgImageComponent } from './register-bg-image/register-bg-image.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { RegisterTwoImageComponent } from './register-two-image/register-two-image.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    CommonLoginFormComponent,
    CommonRegisterFormComponent,
    LoginSimpleComponent,
    LoginBgImageComponent,
    LoginImageTwoComponent,
    LoginValidationComponent,
    LoginTooltipComponent,
    LoginSweetalertComponent,
    RegisterBgImageComponent,
    RegisterSimpleComponent,
    RegisterTwoImageComponent,
    UnlockUserComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
