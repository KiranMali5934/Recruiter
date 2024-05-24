import { Component } from '@angular/core';
import { questionData } from '../../../shared/data/faq/faq';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  public questionData = questionData;

  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
  }	

}
