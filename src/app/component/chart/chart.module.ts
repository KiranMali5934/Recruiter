import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from '../../shared/shared.module';

import { ChartRoutingModule } from './chart-routing.module';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { BasicAreaChartComponent } from './apex-chart/basic-area-chart/basic-area-chart.component';
import { AreaSpalineChartComponent } from './apex-chart/area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './apex-chart/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './apex-chart/column-chart/column-chart.component';
import { BubbleChartComponent } from './apex-chart/bubble-chart/bubble-chart.component';
import { SteplineChartComponent } from './apex-chart/stepline-chart/stepline-chart.component';
import { Column2ChartComponent } from './apex-chart/column2-chart/column2-chart.component';
import { PieChartComponent } from './apex-chart/pie-chart/pie-chart.component';
import { DonutChartComponent } from './apex-chart/donut-chart/donut-chart.component';
import { MixedChartComponent } from './apex-chart/mixed-chart/mixed-chart.component';
import { CandlestickChartComponent } from './apex-chart/candlestick-chart/candlestick-chart.component';
import { RadarChartComponent } from './apex-chart/radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './apex-chart/radial-bar-chart/radial-bar-chart.component';
import { AreaChart1Component } from './google-chart/area-chart1/area-chart1.component';
import { AreaChart2Component } from './google-chart/area-chart2/area-chart2.component';
import { ColumnChart1Component } from './google-chart/column-chart1/column-chart1.component';
import { ColumnChart2Component } from './google-chart/column-chart2/column-chart2.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { BarChart2Component } from './google-chart/bar-chart2/bar-chart2.component';
import { PieChart1Component } from './google-chart/pie-chart1/pie-chart1.component';
import { PieChart2Component } from './google-chart/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './google-chart/pie-chart3/pie-chart3.component';
import { PieChart4Component } from './google-chart/pie-chart4/pie-chart4.component';
import { LinesChartComponent } from './google-chart/lines-chart/lines-chart.component';
import { AdvancedSmilComponent } from './chartist-chart/advanced-smil/advanced-smil.component';
import { SvgPathComponent } from './chartist-chart/svg-path/svg-path.component';
import { DountSvgAnimateComponent } from './chartist-chart/dount-svg-animate/dount-svg-animate.component';
import { BiPolarLineChartAreaComponent } from './chartist-chart/bi-polar-line-chart-area/bi-polar-line-chart-area.component';
import { BiPolarBarChartComponent } from './chartist-chart/bi-polar-bar-chart/bi-polar-bar-chart.component';
import { LineChartAreaComponent } from './chartist-chart/line-chart-area/line-chart-area.component';
import { StackedBarChartComponent } from './chartist-chart/stacked-bar-chart/stacked-bar-chart.component';
import { HorizontalBarChartComponent } from './chartist-chart/horizontal-bar-chart/horizontal-bar-chart.component';
import { ExtremeResponsiveConfigantionComponent } from './chartist-chart/extreme-responsive-configantion/extreme-responsive-configantion.component';
import { SimpleLineChartComponent } from './chartist-chart/simple-line-chart/simple-line-chart.component';
import { HolesInDataComponent } from './chartist-chart/holes-in-data/holes-in-data.component';
import { FilledHolesInDataComponent } from './chartist-chart/filled-holes-in-data/filled-holes-in-data.component';
import { DoughnutChartComponent } from './chartjs-chart/doughnut-chart/doughnut-chart.component';
import { BarsChartComponent } from './chartjs-chart/bars-chart/bars-chart.component';
import { RadarGraphComponent } from './chartjs-chart/radar-graph/radar-graph.component';
import { LineChartComponent } from './chartjs-chart/line-chart/line-chart.component';
import { LineGraphComponent } from './chartjs-chart/line-graph/line-graph.component';
import { PolarChartComponent } from './chartjs-chart/polar-chart/polar-chart.component';

@NgModule({
  declarations: [
    ApexChartComponent,
    ChartistChartComponent,
    ChartjsChartComponent,
    GoogleChartComponent,
    BasicAreaChartComponent,
    AreaSpalineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    BubbleChartComponent,
    SteplineChartComponent,
    Column2ChartComponent,
    PieChartComponent,
    DonutChartComponent,
    MixedChartComponent,
    CandlestickChartComponent,
    RadarChartComponent,
    RadialBarChartComponent,
    AreaChart1Component,
    AreaChart2Component,
    ColumnChart1Component,
    ColumnChart2Component,
    ComboChartComponent,
    BarChart2Component,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
    PieChart4Component,
    LinesChartComponent,
    AdvancedSmilComponent,
    SvgPathComponent,
    DountSvgAnimateComponent,
    BiPolarLineChartAreaComponent,
    BiPolarBarChartComponent,
    LineChartAreaComponent,
    StackedBarChartComponent,
    HorizontalBarChartComponent,
    ExtremeResponsiveConfigantionComponent,
    SimpleLineChartComponent,
    HolesInDataComponent,
    FilledHolesInDataComponent,
    DoughnutChartComponent,
    BarsChartComponent,
    RadarGraphComponent,
    LineChartComponent,
    PolarChartComponent,
    LineGraphComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule,
    NgApexchartsModule,
    Ng2GoogleChartsModule,
    ChartistModule,
    NgChartsModule
  ]
})
export class ChartModule { }
