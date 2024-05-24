import { Component, TemplateRef } from '@angular/core';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-ui-modal',
  templateUrl: './fullscreen-ui-modal.component.html',
  styleUrls: ['./fullscreen-ui-modal.component.scss']
})
export class FullscreenUiModalComponent {

  public FullscreenData = ModalData;
  constructor(private modalService: NgbModal) { }

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }

}
