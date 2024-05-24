import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { productListData, productListInterface } from '../../../../shared/data/ecommerce/product-list';
import { ProductListDirective, SortEvent } from '../../../../shared/directives/product-list.directive';
import { ProductListService } from '../../../../shared/services/ecommerce/product-list.service';

@Component({
  selector: 'app-product-data-table',
  templateUrl: './product-data-table.component.html',
  styleUrls: ['./product-data-table.component.scss']
})
export class ProductDataTableComponent {

  public products$: Observable<productListInterface[]>;
  public total$: Observable<number>;
  public  Data:productListInterface[];
  public PRODUCTLIST = productListData

  @ViewChildren(ProductListDirective)

  headers: QueryList<ProductListDirective>;

  constructor(public service: ProductListService, public config: NgbRatingConfig) {
    config.max = 5; 
    config.readonly = true;
    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.products$.subscribe((data: productListInterface[]) => {
      data.map((elem: productListInterface, i: number) => { elem.id == id && data.splice(i, 1) })
    })
  }


}
