import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-accordion',
  templateUrl: './collapse-accordion.component.html',
  styleUrls: ['./collapse-accordion.component.scss']
})
export class CollapseAccordionComponent {

  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese = !this.togglecollpese;
  }

}
