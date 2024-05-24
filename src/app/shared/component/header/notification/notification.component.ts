import { Component } from '@angular/core';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { NotificationService } from 'src/app/shared/services/API/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  public active = 1;
  public notifications: boolean = false;
  public openTab: string = "all";
  clientNotificationList:any[]=[];
  talentNotificationList:any[]=[];
  _credentials: Credentials | null = null;

  constructor(private notificationService :NotificationService, private credentialsService: CredentialsService,) 
  {    
   this._credentials = this.credentialsService.credentials;
   }

  ngOnInit() {
  if(this._credentials?.UserTypeCode=="Client"){
  this.getNotificationforClient(this._credentials?.UserId)
  }
  if(this._credentials?.UserTypeCode=="Talent"){
    this.getNotificationforTalent(this._credentials?.GlobalUserId)
    }
 }

  public tabbed(val: string) {
    this.openTab = val
  }

  notification() {
    this.notifications = !this.notifications;
  }
  getNotificationforClient(UserId:number){
    debugger
    this.notificationService.GetClientNotification(UserId).subscribe((res:any)=>{
      this.clientNotificationList = res.Data;
    })
  }
  getNotificationforTalent(TalentId:number){
    debugger
    this.notificationService.GetTalentNotification(TalentId).subscribe((res:any)=>{
      this.talentNotificationList = res.Data;
    })
  }
  ReadTalentnotification(userid:any,TalentId:any,NId:any){
    const modelrequest={
      UserId:userid,
      TalentId:TalentId,
      NId:NId
          }
    this.notificationService.UpdateTalentReadedNotification(modelrequest).subscribe((item:any)=>{

    })
  }
  Readnotification(userid:any,TalentId:any,NId:any){
    const modelrequest={
      UserId:userid,
      TalentId:TalentId,
      NId:NId
          }
    this.notificationService.UpdateTalentReadedNotification(modelrequest).subscribe((item:any)=>{

    })
  }
}
