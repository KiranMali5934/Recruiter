import { Component } from '@angular/core';
import { basictable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-basic-table-border-bottom-color',
  templateUrl: './basic-table-border-bottom-color.component.html',
  styleUrls: ['./basic-table-border-bottom-color.component.scss']
})
export class BasicTableBorderBottomColorComponent {

  public basicTable = basictable;

}
