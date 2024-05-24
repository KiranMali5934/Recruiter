import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

const API_USERS_URL = `${environment.serverUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }
  
  GetAllSkill(): Observable<any>{
    debugger
    return this.http.get(`${API_USERS_URL}` + '/skill/GetSkillList')
  }
}
