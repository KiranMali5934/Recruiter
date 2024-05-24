import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { OnlineCourseComponent } from './online-course/online-course.component';
import { AdminGuard } from 'src/app/shared/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recruiter',
        component: DefaultComponent,
        data: {
          title: 'Recruiter Dashboard',
          canActivate: [AdminGuard],
        }
        
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Ecommerce',
          breadcrumb: 'E-Commerce',
          canActivate: [AdminGuard],
        }
      },
      {
        path: 'online-course',
        component: OnlineCourseComponent,
        data: {
          title: 'Online course',
          breadcrumb: 'Online course',
          canActivate: [AdminGuard],
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
