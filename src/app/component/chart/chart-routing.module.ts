import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-chart',
        component: ApexChartComponent,
        data: {
          title: "Apex Chart",
          breadcrumb: "Apex Chart",

        }
      },
      {
        path: 'google-chart',
        component: GoogleChartComponent,
        data: {
          title: "Google Chart",
          breadcrumb: "Google Chart",

        }
      },
      {
        path: 'chartjs-chart',
        component: ChartjsChartComponent,
        data: {
          title: "Chatjs Chart",
          breadcrumb: "Chatjs Chart",

        }
      },
      {
        path: 'chartist-chart',
        component: ChartistChartComponent,
        data: {
          title: "Chartist Chart",
          breadcrumb: "Chartist Chart",

        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
