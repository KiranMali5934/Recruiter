import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent {

  public isShow : boolean = false;
  public isShow1 : boolean = false;

  public htmlContent = '';
  
  constructor(public activeModal: NgbActiveModal) { }


}
