import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple',
        component:LoginSimpleComponent,
      },
      {
        path: 'image-one',
        component: LoginBgImageComponent,
      },
      {
        path: 'image-two',
        component: LoginImageTwoComponent ,
      },
      {
        path: 'validation',
        component: LoginValidationComponent,
      },
      {
        path: 'tooltip',
        component: LoginTooltipComponent,
      },
      {
        path: 'sweetalert',
        component: LoginSweetalertComponent,
      },
      {
        path: 'register-simple',
        component: RegisterSimpleComponent,
      },
      {
        path: 'register-image-one',
        component:RegisterBgImageComponent,
      },
      {
        path: 'register-image-two',
        component: RegisterTwoImageComponent,
      },
      {
        path: 'unlock-user',
        component: UnlockUserComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
