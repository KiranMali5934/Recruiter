import { Component } from '@angular/core';
import { StripedData } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-striped-row-inverse-table',
  templateUrl: './striped-row-inverse-table.component.html',
  styleUrls: ['./striped-row-inverse-table.component.scss']
})
export class StripedRowInverseTableComponent {

  public striped = StripedData;

}
