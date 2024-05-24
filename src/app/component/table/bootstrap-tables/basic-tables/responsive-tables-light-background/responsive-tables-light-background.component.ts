import { Component } from '@angular/core';
import { responsiveTable } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-responsive-tables-light-background',
  templateUrl: './responsive-tables-light-background.component.html',
  styleUrls: ['./responsive-tables-light-background.component.scss']
})
export class ResponsiveTablesLightBackgroundComponent {

  public responiveData = responsiveTable;

}
