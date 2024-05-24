import { Component } from '@angular/core';
import { LatestTransaction } from './../../../../shared/data/dashboard/online-course/online-course';

@Component({
  selector: 'app-latest-transaction',
  templateUrl: './latest-transaction.component.html',
  styleUrls: ['./latest-transaction.component.scss']
})
export class LatestTransactionComponent {

  public LatestTransctionData = LatestTransaction;

}
