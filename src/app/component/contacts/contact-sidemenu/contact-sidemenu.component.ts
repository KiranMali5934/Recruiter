import { Component, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../shared/data/contacts/all-contact';
import { NewContactComponent } from '../contact-modal/new-contact/new-contact.component';
import { AddCategoryComponent } from '../contact-modal/add-category/add-category.component';

@Component({
  selector: 'app-contact-sidemenu',
  templateUrl: './contact-sidemenu.component.html',
  styleUrls: ['./contact-sidemenu.component.scss']
})
export class ContactSidemenuComponent {

  @Output() selectedId: number;
  @Output() statusData: boolean;
  @Output() getTitleData: string;
  @Output() titleData: string;
  
  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open: boolean = false;
  public lastData: data.lastDataList;

  constructor(private modalService: NgbModal) { }
  
  ngOnInit(changes: SimpleChanges) {

    let getStatusdata1 = this.organization.filter((data) => {
      return data.status == true;
    })

    this.statusData = getStatusdata1[0]?.status;

    let getStatusdata = this.Personal.filter((data) => {
      return data.status == true;
    })
    this.statusData = getStatusdata[0]?.status;
  }

  newContacts() {
    const model = this.modalService.open(NewContactComponent, { size: 'lg' });
  }

  addCategory() {
    const model = this.modalService.open(AddCategoryComponent, { size: 'SM' });
  }

  changeData(list: number, title: string) {
    const getId = this.Personal.filter(x => x.title_id == list);
    this.selectedId = getId[0].title_id;
    const getTitleData = this.Personal.filter(x => x.title = title);
    this.titleData = getTitleData[0].title;
  }

  changeData1(list: number , title:string) {
    const getId = this.organization.filter(x => x.title_id == list);
    this.selectedId = getId[0].title_id;
    const getTitleData = this.organization.filter(x => x.title = title);
    this.titleData = getTitleData[0].title;
  }

  openMenu() {
    this.open = !this.open;
  }

  clickOutside():void { 
    this.open = false;
  }

}
