import { Component, Output } from '@angular/core';
import { allBookmarkData, tagData } from '../../../shared/data/bookmark/bookmarks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewBookmarkComponent } from '../bookmark-modal/new-bookmark/new-bookmark.component';
import { AddTagComponent } from '../bookmark-modal/add-tag/add-tag.component';

@Component({
  selector: 'app-bookmark-sidemenu',
  templateUrl: './bookmark-sidemenu.component.html',
  styleUrls: ['./bookmark-sidemenu.component.scss']
})
export class BookmarkSidemenuComponent {

  public selectedheading_id: number;
  public selectegTagId: number;

  public open: boolean = false;
  public BookmarkData = allBookmarkData;
  public tag = tagData;
  
  constructor(private modalService: NgbModal) { }


  openAddBookmark() {
    const modalRef = this.modalService.open(NewBookmarkComponent, { size: 'lg' });
  }

  openAddTag() {
    const modalRef = this.modalService.open(AddTagComponent, { size: 'lg' });
  }

  openMenu(){
    this.open =! this.open
  }
  
  getData(title_id: number) {
    const getHeadingData = this.BookmarkData.filter((data) => {
      return data.title_id === title_id
    })
    this.selectedheading_id = getHeadingData[0].title_id!
  }

  getTagData(title_id: number) {
    const getHeadingData = this.tag.filter((data) => {
      return data.title_id === title_id
    })
    this.selectegTagId = getHeadingData[0].title_id!
  }

   clickOutside():void { 
     this.open = false;
   }
}
