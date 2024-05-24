
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/Recruiters`;

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

 

  constructor(private http: HttpClient) {}

 
  GetAllRecruiter(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetRecruitersList')
  }
  GetAllRecruiterTalents(userid?: number): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetAllRecruiterTalents?UserId=' + userid)
  }
  GetRecruiterById(id?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetRecruitersById?UserId=' + id);
  }
  GetTalentbyRecruiterId(UserId?: number): Observable<any> {
    return this.http.get<any>(`${API_USERS_URL}/GetTalentbyRecruiterId?UserId=${UserId}`)
  }
  }

