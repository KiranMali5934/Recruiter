import { Component } from '@angular/core';
import { OutlineAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  templateUrl: './outline-accordion.component.html',
  styleUrls: ['./outline-accordion.component.scss']
})
export class OutlineAccordionComponent {

  public OutlineAccordionData = OutlineAccordion;

}
