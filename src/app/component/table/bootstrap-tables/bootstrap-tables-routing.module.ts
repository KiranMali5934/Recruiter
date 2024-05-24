import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic-table',
        component: BasicTablesComponent,
        data: {
          title: "Bootstrap Basic Tables",
          breadcrumb: "Bootstrap Basic Tables",
        }
      },
      {
        path: 'table-components',
        component: TableComponentComponent,
        data: {
          title: "Table Components",
          breadcrumb: "Table Components",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapTablesRoutingModule { }
