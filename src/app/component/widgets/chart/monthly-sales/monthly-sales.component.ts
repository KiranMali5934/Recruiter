import { Component } from '@angular/core';
import { MonthlySales } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})
export class MonthlySalesComponent {

  public MonthlySalesChart = MonthlySales;

}
