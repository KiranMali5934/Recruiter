import { Component } from '@angular/core';
import { AddProduct } from '../../../shared/data/ecommerce/add-product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public stepsData = AddProduct;
  public activeSteps: number;

  ngOnInit() {
    const data = AddProduct.filter((data) => {
      return data.stepNumber === 1 ;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

}
