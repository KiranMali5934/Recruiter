import { Component, TemplateRef } from '@angular/core';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrolling-content',
  templateUrl: './scrolling-content.component.html',
  styleUrls: ['./scrolling-content.component.scss']
})
export class ScrollingContentComponent {

  public scrollData = ModalData;
  constructor(private modalService: NgbModal) { }

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(scrollingContent);
  }


}
