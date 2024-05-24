import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Category ,CategoryData } from '../../../../shared/data/ecommerce/categoies-page';
import {CategoriesDirective , SortEvent  } from '../../../../shared/directives/categories-page.directive';
import { CategoriesService } from '../../../../shared/services/ecommerce/categories-page.service';

@Component({
  selector: 'app-category-data-table',
  templateUrl: './category-data-table.component.html',
  styleUrls: ['./category-data-table.component.scss']
})
export class CategoryDataTableComponent {

  public Category$: Observable<Category[]>;
  public total$: Observable<number>;
  public  Data:Category[];
  public CategoryList = CategoryData

  @ViewChildren(CategoriesDirective)
  headers: QueryList<CategoriesDirective>;

  constructor(public service:CategoriesService) {
  
    this.Category$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.Category$.subscribe((res) => {
      this.Data = res;
    });
  }


  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortableCategory !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.Category$.subscribe((data: Category[]) => {
      data.map((elem: Category, i: number) => { elem.id == id && data.splice(i, 1) })
    })
  }

}
