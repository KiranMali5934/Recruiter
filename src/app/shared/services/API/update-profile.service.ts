import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
const API_USERS_URL = `${environment.serverUrl}/UpdateProfile`;

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private http: HttpClient) { }
  UpdateProfile(request:any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/UpdateUpdateProfile', request);
  }
  AddUpdateBankDetails(request:any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/BankAddUpdate', request);
  }
}
