import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Allbookmark, allBookmarkData, bookmarkDataInterface, tagData } from '../../../shared/data/bookmark/bookmarks';
import { EditBookmarkComponent } from '../bookmark-modal/edit-bookmark/edit-bookmark.component';

@Component({
  selector: 'app-bookmark-data',
  templateUrl: './bookmark-data.component.html',
  styleUrls: ['./bookmark-data.component.scss']
})
export class BookmarkDataComponent {

  @Input() selectedheading_id: number;
  @Input() selectegTagId: number;

  public BookmarkData = allBookmarkData;
  public tag = tagData;
  public getBookmarkData: Allbookmark;
  public listBookmark: boolean = false;
  public editBookmarkData: bookmarkDataInterface[];
  public bookmarkData: bookmarkDataInterface[] = []
  public favouriteData: bookmarkDataInterface[];


  @ViewChild("editBookmarkModal") EditBookmarkModal: EditBookmarkComponent;

  ngOnInit(): void {
    this.BookmarkData.map((data) => {
      if (data.status) {
        this.getBookmarkData = data;
        for (let i of data.data) {
          this.bookmarkData.push(i)
        }
      }
    })
  }

  changegrid() {
    this.listBookmark = false
  }
  changelist() {
    this.listBookmark = true
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedheading_id']?.currentValue;
    this.BookmarkData.map((data) => {
      if (data.title_id === id) {
        this.getBookmarkData = data;
      }
    })
    let tagId = changes['selectegTagId']?.currentValue;

    this.tag.map((data) => {
      if (data.title_id === tagId) {
        this.getBookmarkData = data;
      }
    })
  }

  modal(id: number) {
    const a = this.bookmarkData.filter((data) => {
      return data.id === id;
    })
    this.editBookmarkData = a;
    this.EditBookmarkModal.openModal(this.editBookmarkData)
  }

  favourite(id: number) {
    this.favouriteData = this.BookmarkData[0].data.filter((data) => {
      return data.id === id;
    })
    this.favouriteData[0].favourite = !this.favouriteData[0].favourite;
  }

}
