import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapTablesRoutingModule } from './bootstrap-tables-routing.module';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { BasicTableBorderBottomColorComponent } from './basic-tables/basic-table-border-bottom-color/basic-table-border-bottom-color.component';
import { InverseTableComponent } from './basic-tables/inverse-table/inverse-table.component';
import { HoverableRowsHorizontalBorderComponent } from './basic-tables/hoverable-rows-horizontal-border/hoverable-rows-horizontal-border.component';
import { InverseTablePrimaryBackgroundComponent } from './basic-tables/inverse-table-primary-background/inverse-table-primary-background.component';
import { CaptionComponent } from './basic-tables/caption/caption.component';
import { TableHeadOptionsComponent } from './basic-tables/table-head-options/table-head-options.component';
import { StripedRowInverseTableComponent } from './basic-tables/striped-row-inverse-table/striped-row-inverse-table.component';
import { BreckpointSpecificComponent } from './basic-tables/breckpoint-specific/breckpoint-specific.component';
import { ResponsiveTablesLightBackgroundComponent } from './basic-tables/responsive-tables-light-background/responsive-tables-light-background.component';
import { SizingTablesComponent } from './basic-tables/sizing-tables/sizing-tables.component';
import { CustomTableColorHoverStrippedComponent } from './basic-tables/custom-table-color-hover-stripped/custom-table-color-hover-stripped.component';
import { DashedBorderComponent } from './basic-tables/dashed-border/dashed-border.component';
import { UiTableComponent } from './table-component/ui-table/ui-table.component';
import { AlertsTableComponent } from './table-component/alerts-table/alerts-table.component';
import { ProgressbarTableComponent } from './table-component/progressbar-table/progressbar-table.component';
import { CheckboxTableComponent } from './table-component/checkbox-table/checkbox-table.component';
import { RadioButtonsTableComponent } from './table-component/radio-buttons-table/radio-buttons-table.component';
import { SelectTableComponent } from './table-component/select-table/select-table.component';
import { InputTableComponent } from './table-component/input-table/input-table.component';
import { BadgesTableComponent } from './table-component/badges-table/badges-table.component';
import { TooltipTriggersTableComponent } from './table-component/tooltip-triggers-table/tooltip-triggers-table.component';
import { SwitchTableComponent } from './table-component/switch-table/switch-table.component';
import { AllAlertsTableComponent } from './table-component/alerts-table/all-alerts-table/all-alerts-table.component';

@NgModule({
  declarations: [
    BasicTablesComponent,
    TableComponentComponent,
    BasicTableBorderBottomColorComponent,
    InverseTableComponent,
    HoverableRowsHorizontalBorderComponent,
    InverseTablePrimaryBackgroundComponent,
    CaptionComponent,
    TableHeadOptionsComponent,
    StripedRowInverseTableComponent,
    BreckpointSpecificComponent,
    ResponsiveTablesLightBackgroundComponent,
    SizingTablesComponent,
    CustomTableColorHoverStrippedComponent,
    DashedBorderComponent,
    UiTableComponent,
    AlertsTableComponent,
    ProgressbarTableComponent,
    CheckboxTableComponent,
    RadioButtonsTableComponent,
    SelectTableComponent,
    InputTableComponent,
    BadgesTableComponent,
    TooltipTriggersTableComponent,
    SwitchTableComponent,
    AllAlertsTableComponent
  ],
  imports: [
    CommonModule,
    BootstrapTablesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BootstrapTablesModule { }
