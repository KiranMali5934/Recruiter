import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


const API_USERS_URL = `${environment.serverUrl}/Partners`;
@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  GetAllPartner(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetPartnersList')
  }
  GetPartnersById(id?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetPartnersById?UserId=' + id);
  }
  
}
