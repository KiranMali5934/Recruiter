import { Component } from '@angular/core';
import { filterData } from '../../../../shared/data/ecommerce/product';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { BrandCheckbox, CategoryCheckbox } from '../../../../shared/data/ecommerce/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public filter = filterData;
  public CategoryCheckboxData = CategoryCheckbox;
  public BarndCheckboxData = BrandCheckbox;
  public openSidebar: boolean = false
  public value2: number = 200;
  public maxvalue: number = 800;

  constructor(public config: NgbRatingConfig) { config.max = 5; config.readonly = true; }

  customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
  }

  options: Options = {
    floor: 0,
    ceil: 1000,
    showTicksValues: true,
    tickStep : 250
  };
  
  sidebarToggle() {
    this.openSidebar = !this.openSidebar
  }

}
