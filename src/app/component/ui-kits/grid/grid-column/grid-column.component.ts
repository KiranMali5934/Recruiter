import { Component } from '@angular/core';
import { gridColumn } from '../../../../shared/data/ui-kits/grid-options';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  public gridColumnData = gridColumn;

}
