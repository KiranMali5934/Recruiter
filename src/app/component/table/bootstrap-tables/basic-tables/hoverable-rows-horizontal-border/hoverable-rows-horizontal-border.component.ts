import { Component } from '@angular/core';
import { hoverbleData } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-hoverable-rows-horizontal-border',
  templateUrl: './hoverable-rows-horizontal-border.component.html',
  styleUrls: ['./hoverable-rows-horizontal-border.component.scss']
})
export class HoverableRowsHorizontalBorderComponent {

  public hoverble = hoverbleData;


}
