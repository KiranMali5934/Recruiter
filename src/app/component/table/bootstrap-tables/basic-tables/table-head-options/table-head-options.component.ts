import { Component } from '@angular/core';
import { tablehead } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-table-head-options',
  templateUrl: './table-head-options.component.html',
  styleUrls: ['./table-head-options.component.scss']
})
export class TableHeadOptionsComponent {

  public headoptionsData = tablehead;

}
