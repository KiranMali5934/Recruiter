import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-extra-large-modal',
  templateUrl: './extra-large-modal.component.html',
  styleUrls: ['./extra-large-modal.component.scss']
})
export class ExtraLargeModalComponent {

  constructor(private modalService: NgbModal) { }

  ExtraLargemodal(ExtralargeContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(ExtralargeContent, { size: 'xl' });
  }

}
