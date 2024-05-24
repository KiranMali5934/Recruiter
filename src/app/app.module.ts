import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { DecimalPipe } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './auth/login/login.component';
import { VerifyAccountComponent } from './auth/verify-account/verify-account.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { FormControlsModule } from './component/forms/form-controls/form-controls.module';
import { ApiPrefixInterceptor } from './shared/services/http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './shared/services/http/error-handler.interceptor';
// import { LoadingInterceptor } from './shared/services/http/loading.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
 }


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerifyAccountComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    HttpClientModule,
  ],
  providers: [DecimalPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
