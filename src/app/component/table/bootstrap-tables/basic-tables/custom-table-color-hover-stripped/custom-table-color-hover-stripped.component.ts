import { Component } from '@angular/core';
import { customHover } from '../../../../../shared/data/table/bootstrap-table/basic-tables';


@Component({
  selector: 'app-custom-table-color-hover-stripped',
  templateUrl: './custom-table-color-hover-stripped.component.html',
  styleUrls: ['./custom-table-color-hover-stripped.component.scss']
})
export class CustomTableColorHoverStrippedComponent {

  public customhoverData = customHover;

}
