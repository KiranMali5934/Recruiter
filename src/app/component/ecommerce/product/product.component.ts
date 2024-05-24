import { Component } from '@angular/core';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public OpenFilter: boolean = false;

  constructor(private ProductBoxFilterService: ProductBoxFilterService) { }

  gridOpens() {
    this.listView = false
    this.ProductBoxFilterService.gridOpen()
  }
  listOpens() {
    this.listView = true
    this.ProductBoxFilterService.listOpen()
  }
  grid2s() {
    this.listView = false
    this.ProductBoxFilterService.grid2()

  }
  grid3s() {
    this.listView = false
    this.ProductBoxFilterService.grid3()
  }
  grid6s() {
    this.listView = false
    this.ProductBoxFilterService.grid6()
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar
  }
  
  openFilter() {
    this.openSidebar = !this.openSidebar
  }

  clickOutside():void { 
    this.openSidebar = false;
  }
}
