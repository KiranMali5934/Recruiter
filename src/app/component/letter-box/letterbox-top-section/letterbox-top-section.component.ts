import { Component } from '@angular/core';

@Component({
  selector: 'app-letterbox-top-section',
  templateUrl: './letterbox-top-section.component.html',
  styleUrls: ['./letterbox-top-section.component.scss']
})
export class LetterboxTopSectionComponent {

  public active = 1;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
