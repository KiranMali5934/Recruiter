import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment.prod";
import { Credentials, LoginContext } from "../../model/authentication.model";

const API_USERS_URL = `${environment.serverUrl}/Auth`;
// const API_USERS_URL = `/Auth`;


@Injectable({   
  providedIn: 'root'
})
export class Authloginservice {

  constructor(
    // private credentialsService: CredentialsService,
     private http: HttpClient,
  ) { }

  login(context: LoginContext): Observable<Credentials> {
    debugger
    // Replace by proper authentication call
    return this.http.post<Credentials>(`${API_USERS_URL}` + '/Login', context);
  }
  RegisterUser(request: any): Observable<any> {
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/Registration', request);
  }
  ForgotPassword(request: any): Observable<any> {
    var Email = request.Email;
    return this.http.get<any>(`${API_USERS_URL}` + '/ForgotPassword?Email=' + Email);
  }

  VerifyYourAccount(request: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}` + '/VerifyMail', request ); // +token + "&email="+email);
  }
  ResendEmail(token:string,email:string): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/ResendEmail?token='+token + "&email="+email);
  }

  ResetPassword(token:string,email:string,password:string ): Observable<any> {
    debugger
    return this.http.get(`${API_USERS_URL}` + '/ResetPassword?token='+token + "&Email="+email + "&Password="+ password);
  }
//   logout(): Observable<boolean> {
//     // Customize credentials invalidation here
//     this.credentialsService.setCredentials();
//     return of(true);
//   }
}
