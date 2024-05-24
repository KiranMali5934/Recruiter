import { Component } from '@angular/core';
import { FlushAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-flush-accordion',
  templateUrl: './flush-accordion.component.html',
  styleUrls: ['./flush-accordion.component.scss']
})
export class FlushAccordionComponent {

  public flushAccordionData = FlushAccordion;

}
