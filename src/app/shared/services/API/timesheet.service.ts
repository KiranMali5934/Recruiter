import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';



const API_USERS_URL = `${environment.serverUrl}/TimeSheet`;
@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient) { }


  AddUpdateTimeSheet(request: any) {
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateTimeSheet', request);
  }
  GetTimeSheetById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTimeSheetByUserId?UserId=' + id);
  }
  GetTimeSheetFilterList(){
    debugger
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTimeSheetFilterList');
  }
}
