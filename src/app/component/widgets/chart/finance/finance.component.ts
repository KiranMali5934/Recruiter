import { Component } from '@angular/core';
import { Finance } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent {

  public financesData = Finance;

}
