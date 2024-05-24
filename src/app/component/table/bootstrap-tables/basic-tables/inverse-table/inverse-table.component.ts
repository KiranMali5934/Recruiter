import { Component } from '@angular/core';
import { InverseTable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss']
})
export class InverseTableComponent {

  public inversetableData = InverseTable;

}
