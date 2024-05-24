import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/Agency`;


@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  constructor(private http: HttpClient) {}

  GetAllAgency(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetAgencyList')
  }
  GetAgencyById(id?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetAgencyById?UserId=' + id);
  }
  GeTalentByAgencyId(UserId?:number): Observable<any>{
    return this.http.get(`${API_USERS_URL}/GeTalentByAgencyId?UserId=`+UserId )
  }
  GetAllTalentForAgency(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetAllTalentForAgency')
  }
}


