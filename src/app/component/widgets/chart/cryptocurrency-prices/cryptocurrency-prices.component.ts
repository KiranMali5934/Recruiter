import { Component } from '@angular/core';
import { CryptocurrencyPrices } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-cryptocurrency-prices',
  templateUrl: './cryptocurrency-prices.component.html',
  styleUrls: ['./cryptocurrency-prices.component.scss']
})
export class CryptocurrencyPricesComponent {

  public CryptocurrencyPricesChart = CryptocurrencyPrices;

}
