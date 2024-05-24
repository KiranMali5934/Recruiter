import { Component } from '@angular/core';
import { LiveProducts } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-live-products',
  templateUrl: './live-products.component.html',
  styleUrls: ['./live-products.component.scss']
})
export class LiveProductsComponent {

  public LiveProductChart = LiveProducts;

}
