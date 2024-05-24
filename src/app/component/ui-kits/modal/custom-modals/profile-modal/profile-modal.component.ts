import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent {

  constructor(private modalService: NgbModal) { }

  profilemodal(profilecontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(profilecontant, { centered: true });
  }

}
