import { Component } from '@angular/core';
import { sizingTable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-sizing-tables',
  templateUrl: './sizing-tables.component.html',
  styleUrls: ['./sizing-tables.component.scss']
})
export class SizingTablesComponent {

  public sizingData = sizingTable;

}
