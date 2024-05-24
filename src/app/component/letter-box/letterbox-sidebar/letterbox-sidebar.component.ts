import { Component, SimpleChanges } from '@angular/core';
import { AddLabelComponent } from '../letterbox-modal/add-label/add-label.component';
import { ComposeEmailComponent } from '../letterbox-modal/compose-email/compose-email.component';
import * as data from '../../../shared/data/letter-box/letter-box';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-letterbox-sidebar',
  templateUrl: './letterbox-sidebar.component.html',
  styleUrls: ['./letterbox-sidebar.component.scss']
})
export class LetterboxSidebarComponent {

  public email = data.emailFilter;
  public emailData: data.email;
  public selectedId: number;
  public open: boolean = false;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(changes: SimpleChanges) {
    let getStatusdata = this.email.filter((data) => {
      return data.status == true;
    })
  }

  letterbox(item: data.email) {
    const getdata = this.email.filter(data => data.id == item.id);
    this.selectedId = getdata[0].id;
    this.email.filter(data => {
      if (item.id == data.id) {
        data.status = true;
      } else {
        data.status = false;
      }
    })
  }

  composeEmail() {
    const model = this.modalService.open(ComposeEmailComponent , { size: 'lg' });
  }

  addlable(){
    const model = this.modalService.open( AddLabelComponent, { size: 'lg' });
  }

  openMenu() {
    this.open = !this.open
  }
   
  clickOutside():void { 
    this.open = false;
  }

}
