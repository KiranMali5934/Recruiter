import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent {

  constructor(private modalService: NgbModal) { }

  FullScreenModal(fullScreenContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(fullScreenContent, { fullscreen: true });
  }

}
