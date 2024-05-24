import { Component } from '@angular/core';
import { PrimaryBackground } from '../../../../../shared/data/table/bootstrap-table/basic-tables';


@Component({
  selector: 'app-inverse-table-primary-background',
  templateUrl: './inverse-table-primary-background.component.html',
  styleUrls: ['./inverse-table-primary-background.component.scss']
})
export class InverseTablePrimaryBackgroundComponent {

  public primaryData = PrimaryBackground;

}
