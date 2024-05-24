import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/Notification`;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  constructor(private  httpClient:HttpClient) { }

  GetAllNotificationList(){
   return this.httpClient.get(`${API_USERS_URL}`+'/GetNotificationList');
  }
  
  GetNotificationById(id:number){
    return this.httpClient.get(`${API_USERS_URL}`+'/GetNotificationList?NId='+id);
  }
  //GetTalentNotification
  GetTalentNotification(TalentId:number){
    return this.httpClient.get(`${API_USERS_URL}`+'/GetTalentNotification?TalentId='+TalentId);
  }
  GetClientNotification(UserId:number){
    return this.httpClient.get(`${API_USERS_URL}`+'/GetClientNotification?UserId='+UserId);
    
  }
  UpdateReadedNotification(request: any) {
    return this.httpClient.post<any>(`${API_USERS_URL}` + '/UpdateReadedNotification', request);
  }
  UpdateTalentReadedNotification(request: any) {
    return this.httpClient.post<any>(`${API_USERS_URL}` + '/UpdateTalentReadedNotification', request);
  }
}
