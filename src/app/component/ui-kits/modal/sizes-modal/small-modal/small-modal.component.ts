import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.scss']
})
export class SmallModalComponent {

  constructor(private modalService: NgbModal) { }

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(smallContent, { size: 'sm' });
  }

}
