import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-balance-modal',
  templateUrl: './balance-modal.component.html',
  styleUrls: ['./balance-modal.component.scss']
})
export class BalanceModalComponent {

  constructor(private modalService: NgbModal) { }

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(Balancecontant, { centered: true });
  }

}
