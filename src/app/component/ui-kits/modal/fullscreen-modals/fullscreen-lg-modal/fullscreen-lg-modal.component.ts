import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-lg-modal',
  templateUrl: './fullscreen-lg-modal.component.html',
  styleUrls: ['./fullscreen-lg-modal.component.scss']
})
export class FullscreenLgModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowLgModal(FullscreenbelowLgContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowLgContent, { size: 'lg' });
  }

}
