import { Component, Input } from '@angular/core';
import { faqTopPart } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-top-common-faq',
  templateUrl: './top-common-faq.component.html',
  styleUrls: ['./top-common-faq.component.scss']
})
export class TopCommonFaqComponent {

  @Input() data : faqTopPart[];

}
