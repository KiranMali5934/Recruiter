import { Component } from '@angular/core';
import { GeneralsalesChart } from '../../../../shared/data/widgets/general-chart';

@Component({
  selector: 'app-sales-general-chart',
  templateUrl: './sales-general-chart.component.html',
  styleUrls: ['./sales-general-chart.component.scss']
})
export class SalesGeneralChartComponent {

  public GenralSalesChartData = GeneralsalesChart;
  
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
