import { Component , Input, SimpleChanges } from '@angular/core';
import * as data from "../../../shared/data/contacts/all-contact";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  @Input() selectedId: number;
  @Input() statusData: boolean;
  @Input() getTitleData: string;

  public Personal = data.Personal;
  public Organization = data.Organization;
  public getTaskData: data.contactData;
  public lastData: data.lastDataList;
  public open: boolean = false;


  ngOnInit() {
    this.Personal.map((data) => {
      if (data.status) {
        this.getTaskData = data;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let ipersnol_Id = changes['selectedId']?.currentValue;
    this.Personal.map((data) => {
      if (data.title_id === ipersnol_Id) {
        this.getTaskData = data;
      }
    })

    let getTitle = changes['getTitleData']?.currentValue;
    this.Personal.map((data) => {
      if (data.title === getTitle) {
        this.getTaskData = data;
      }
    })

    let oragnization_Id = changes['selectedId']?.currentValue;
    this.Organization.map((data) => {
      if (data.title_id === oragnization_Id) {
        this.getTaskData = data;
      }
    })
  }

  changeData(list: data.lastDataList) {
    this.lastData = list;
    if (!list.status) {
      this.getTaskData.data.forEach((a: data.lastDataList) => {
        a.status = false;
      })
    }
    list.status = !list.status;
  }

  openHistory() {
    this.open = !this.open;
  }
 
}
