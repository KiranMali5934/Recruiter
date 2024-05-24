import { Component } from '@angular/core';
import { TotalrevenueChart } from '../../../../shared/data/dashboard/default/default-chart';

@Component({
  selector: 'app-top-revenue-product',
  templateUrl: './top-revenue-product.component.html',
  styleUrls: ['./top-revenue-product.component.scss']
})
export class TopRevenueProductComponent {

  public RevenueChart = TotalrevenueChart;
  public isopen:boolean=false;
  
  open(){
    this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }
}
