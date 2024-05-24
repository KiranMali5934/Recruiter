import { Component } from '@angular/core';
import { TopProduct } from './../../../../shared/data/dashboard/online-course/online-course';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent {

  public TopProductData = TopProduct

}
