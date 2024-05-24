import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop-modal',
  templateUrl: './static-backdrop-modal.component.html',
  styleUrls: ['./static-backdrop-modal.component.scss']
})
export class StaticBackdropModalComponent {

  constructor(private modalService: NgbModal) { }

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(StaticBackdropContent, { centered: true });
  }

}
