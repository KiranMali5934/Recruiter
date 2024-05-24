import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';

@Component({
  selector: 'app-all-project-table',
  templateUrl: './all-project-table.component.html',
  styleUrls: ['./all-project-table.component.scss']
})
export class AllProjectTableComponent {

  public projecData = chartData.projectTable;
  public openid: number;

  openMenu(id: number) {
    this.projecData.filter((data) => {
      if (data.id == id) {
        this.openid = this.openid !== data.id ? data.id : 0;
      }
    })
  }

 
}
