import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Allbookmark, bookmarkDataInterface } from '../../../../shared/data/bookmark/bookmarks';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent {

  public closeResult: string;
  public modalOpen: boolean = false;

  public bookmarkDetails: bookmarkDataInterface[];
  
  show() {
    throw new Error('Method not implemented.');
  }


  @ViewChild("editBookmarkModal", { static: false }) editBookmarkModal: TemplateRef<Allbookmark>;


  constructor(private modalService: NgbModal) { }

  async openModal(data: bookmarkDataInterface[]) {
    this.bookmarkDetails = data;
    this.modalOpen = true;

    this.modalService.open(this.editBookmarkModal, {
      ariaLabelledBy: 'EditBookmark-Modal',
      windowClass: 'modal-lg modal-dialog-centered'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
