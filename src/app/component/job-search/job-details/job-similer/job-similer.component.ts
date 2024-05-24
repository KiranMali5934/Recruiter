import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { jobCardsData } from '../../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-similer',
  templateUrl: './job-similer.component.html',
  styleUrls: ['./job-similer.component.scss']
})
export class JobSimilerComponent {

  public jobCardsData = jobCardsData;
  public rating = 3;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
