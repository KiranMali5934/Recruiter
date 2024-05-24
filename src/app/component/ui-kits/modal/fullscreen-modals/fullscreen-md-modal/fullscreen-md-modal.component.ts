import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-md-modal',
  templateUrl: './fullscreen-md-modal.component.html',
  styleUrls: ['./fullscreen-md-modal.component.scss']
})
export class FullscreenMdModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowMdModal(FullscreenbelowMdContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowMdContent, { size: 'md' });
  }

}
