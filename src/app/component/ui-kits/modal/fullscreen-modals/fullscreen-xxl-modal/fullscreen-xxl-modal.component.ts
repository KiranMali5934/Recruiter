import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-xxl-modal',
  templateUrl: './fullscreen-xxl-modal.component.html',
  styleUrls: ['./fullscreen-xxl-modal.component.scss']
})
export class FullscreenXxlModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowXxlModal(FullscreenbelowXxlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXxlContent, { size: 'xxl' });
  }

}
