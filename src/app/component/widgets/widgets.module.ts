import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardModule } from '../dashboard/dashboard.module';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { GeneralComponent } from './general/general.component';
import { BoostSaleCardComponent } from './general/boost-sale-card/boost-sale-card.component';
import { SalesGeneralChartComponent } from './general/sales-general-chart/sales-general-chart.component';
import { ChartComponent } from './chart/chart.component';
import { CommonWidgetsChartComponent } from './chart/common-widgets-chart/common-widgets-chart.component';
import { MonthlyHistoryComponent } from './chart/monthly-history/monthly-history.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { LiveProductsComponent } from './chart/live-products/live-products.component';
import { TurnOverComponent } from './chart/turn-over/turn-over.component';
import { CryptocurrencyPricesComponent } from './chart/cryptocurrency-prices/cryptocurrency-prices.component';
import { CryptoAnnotationsComponent } from './chart/crypto-annotations/crypto-annotations.component';
import { StockMarketComponent } from './chart/stock-market/stock-market.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { OrderStatus2Component } from './chart/order-status2/order-status2.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { UsesComponent } from './chart/uses/uses.component';

@NgModule({
  declarations: [
    GeneralComponent,
    BoostSaleCardComponent,
    SalesGeneralChartComponent,
    ChartComponent,
    CommonWidgetsChartComponent,
    MonthlyHistoryComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    LiveProductsComponent,
    TurnOverComponent,
    CryptocurrencyPricesComponent,
    CryptoAnnotationsComponent,
    StockMarketComponent,
    FinanceComponent,
    OrderStatus2Component,
    MonthlySalesComponent,
    UsesComponent,
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    DashboardModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class WidgetsModule { }
