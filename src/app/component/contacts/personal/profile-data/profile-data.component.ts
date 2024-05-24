import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from "../../../../shared/data/contacts/all-contact";
import { contactData, lastDataList } from '../../../../shared/data/contacts/all-contact';
import { PrintComponent } from '../../contact-modal/print/print.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent {

  @Input() selectedSubId: number;
  @Input() status: boolean;
  @Input() lastData: lastDataList;
  @Input() getTitleData: contactData;
  @Input() TaskData: contactData;
  
  public editContact: boolean = false;
  public open: boolean = false;
  public Personal = data.Personal;
  public Organization = data.Organization;
  public getTaskData: contactData;
  public statusData: contactData;

  @ViewChild("printModal") PrintModal: PrintComponent;

  constructor(private modalService: NgbModal) {}
  
  ngOnInit() {
    this.Personal.map((data) => {
      if (data.status) {
        this.statusData = data;
      }
      const listnewData = this.statusData.data;
      const currentData = listnewData.filter((data: { status: boolean; }) => {
        return data.status === true;
      })
      this.lastData = currentData[0];
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let tagsid = changes['selectedSubId']?.currentValue;
    this.Organization.map((data) => {
      if (data.title_id === tagsid) {
        this.getTaskData = data;
      }
    })
  }

  openHistory() {
    this.open = !this.open;
  }

  printContact(id: number) {
    const modalRef = this.modalService.open(PrintComponent);
  }

  deleteContact() {
    Swal.fire({
      text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#EFEFEE !important',
      confirmButtonColor: 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean; }) => {
      if (result.isConfirmed) {
      } else {
        Swal.fire('', 'Your contact is safe!')
      }
    })
  }

}
