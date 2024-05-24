import { Component } from '@angular/core';
import { Categories } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public Categories = Categories;
  public isCollapsed = false;

}
