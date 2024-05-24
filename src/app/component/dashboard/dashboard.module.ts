import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from 'ngx-slider-v2';

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SalesChartComponent } from './default/sales-chart/sales-chart.component';
import { TopRevenueProductComponent } from './default/top-revenue-product/top-revenue-product.component';
import { SaleHistoryComponent } from './default/sale-history/sale-history.component';
import { LatestOrdersComponent } from './default/latest-orders/latest-orders.component';
import { CommonDefaultChartComponent } from './default/common-default-chart/common-default-chart.component';
import { CommonProductCostingComponent } from './default/common-product-costing/common-product-costing.component';
import { SpecialOfferComponent } from './default/special-offer/special-offer.component';
import { LiveProductComponent } from './default/live-product/live-product.component';
import { EcommerceDetailsComponent } from './default/ecommerce-details/ecommerce-details.component';
import { TopEcommerceCardComponent } from './ecommerce/top-ecommerce-card/top-ecommerce-card.component';
import { ProjectStatisticsComponent } from './ecommerce/project-statistics/project-statistics.component';
import { TodayWorkComponent } from './ecommerce/today-work/today-work.component';
import { ActivityLogComponent } from './ecommerce/activity-log/activity-log.component';
import { ImportantProjectListComponent } from './ecommerce/important-project-list/important-project-list.component';
import { AllProjectTableComponent } from './ecommerce/all-project-table/all-project-table.component';
import { TopClientListComponent } from './ecommerce/top-client-list/top-client-list.component';
import { CommonWidgetChartComponent } from './ecommerce/all-project-table/common-widget-chart/common-widget-chart.component';
import { MessageComponent } from './ecommerce/message/message.component';
import { AddProjectCardComponent } from './ecommerce/add-project-card/add-project-card.component';
import { ProjectIdeasCardComponent } from './ecommerce/project-ideas-card/project-ideas-card.component';
import { CalendarComponent } from './ecommerce/calendar/calendar.component';
import { OnlineCourseComponent } from './online-course/online-course.component';
import { RevenueGrowthComponent } from './online-course/revenue-growth/revenue-growth.component';
import { DeliveriesComponent } from './online-course/deliveries/deliveries.component';
import { TopProductComponent } from './online-course/top-product/top-product.component';
import { NewUserComponent } from './online-course/new-user/new-user.component';
import { TeamActivityComponent } from './online-course/team-activity/team-activity.component';
import { UserVisitsDayComponent } from './online-course/user-visits-day/user-visits-day.component';
import { LatestTransactionComponent } from './online-course/latest-transaction/latest-transaction.component';
import { SaleCardComponent } from './online-course/sale-card/sale-card.component';
import { ChartRaderComponent } from './online-course/chart-rader/chart-rader.component';

@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    SalesChartComponent,
    TopRevenueProductComponent,
    SaleHistoryComponent,
    LatestOrdersComponent,
    CommonDefaultChartComponent,
    CommonProductCostingComponent,
    SpecialOfferComponent,
    LiveProductComponent,
    EcommerceDetailsComponent,
    TopEcommerceCardComponent,
    ProjectStatisticsComponent,
    TodayWorkComponent,
    ActivityLogComponent,
    ImportantProjectListComponent,
    AllProjectTableComponent,
    TopClientListComponent,
    CommonWidgetChartComponent,
    MessageComponent,
    AddProjectCardComponent,
    ProjectIdeasCardComponent,
    CalendarComponent,
    OnlineCourseComponent,
    RevenueGrowthComponent,
    DeliveriesComponent,
    TopProductComponent,
    NewUserComponent,
    TeamActivityComponent,
    UserVisitsDayComponent,
    LatestTransactionComponent,
    SaleCardComponent,
    ChartRaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    SharedModule,
    NgxSliderModule,
    NgbDatepickerModule
  ],
  exports:[
    CommonProductCostingComponent,
    CommonDefaultChartComponent,
    TopEcommerceCardComponent,
    UserVisitsDayComponent,
    DeliveriesComponent,
    CalendarComponent,
    SpecialOfferComponent,
    CalendarComponent,
    EcommerceDetailsComponent
  ]
})
export class DashboardModule { }
