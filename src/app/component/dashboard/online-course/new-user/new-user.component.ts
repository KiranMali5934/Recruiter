import { Component } from '@angular/core';
import { NewUser } from '../../../../shared/data/dashboard/online-course/online-course';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  public newUserData = NewUser;
  public openid:number

  open(id:number){
   this.newUserData.filter((data)=>{
    if(data.id == id){
     this.openid = this.openid !== data.id ? data.id : 0;
    }
   })
  }

}
