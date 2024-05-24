import { Component } from '@angular/core';
import { saleHistory } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.scss']
})
export class SaleHistoryComponent {

  public saleHistoryData = saleHistory

}
