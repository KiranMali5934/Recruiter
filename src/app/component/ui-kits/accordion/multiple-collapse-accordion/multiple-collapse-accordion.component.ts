import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-collapse-accordion',
  templateUrl: './multiple-collapse-accordion.component.html',
  styleUrls: ['./multiple-collapse-accordion.component.scss']
})
export class MultipleCollapseAccordionComponent {

  public togglecollpese = false;
  public togglecollpese2 = false;
  public togglecollpese3 = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese2 = !this.togglecollpese2;
  }

  toggle() {
    this.togglecollpese = !this.togglecollpese;
    this.togglecollpese2 = !this.togglecollpese2;
  }

}
