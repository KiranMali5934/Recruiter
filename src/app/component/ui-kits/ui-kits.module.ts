import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UiKitsRoutingModule } from './ui-kits-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { TagPillsComponent } from './tag-pills/tag-pills.component';
import { ProgressComponent } from './progress/progress.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { ColoredHeadingsComponent } from './typography/colored-headings/colored-headings.component';
import { ListingTypographyComponent } from './typography/listing-typography/listing-typography.component';
import { DisplayHeadingsComponent } from './typography/display-headings/display-headings.component';
import { InlineTextElementsComponent } from './typography/inline-text-elements/inline-text-elements.component';
import { TextColorComponent } from './typography/text-color/text-color.component';
import { BlockquotesComponent } from './typography/blockquotes/blockquotes.component';
import { FontWeightComponent } from './typography/font-weight/font-weight.component';
import { SizesComponent } from './avatars/sizes/sizes.component';
import { StatusIndicatorComponent } from './avatars/status-indicator/status-indicator.component';
import { ShapesComponent } from './avatars/shapes/shapes.component';
import { RatioComponent } from './avatars/ratio/ratio.component';
import { GroupingComponent } from './avatars/grouping/grouping.component';
import { CommonBorderStyleComponent } from './helper-classes/styles-borders/common-border-style/common-border-style.component';
import { CommonDisplaysStyleComponent } from './helper-classes/displays-borders/common-displays-style/common-displays-style.component';
import { StylesBordersComponent } from './helper-classes/styles-borders/styles-borders.component';
import { DisplaysBordersComponent } from './helper-classes/displays-borders/displays-borders.component';
import { BackgroundColorsComponent } from './helper-classes/background-colors/background-colors.component';
import { CommonBackgroundColorsComponent } from './helper-classes/background-colors/common-background-colors/common-background-colors.component';
import { BorderColorComponent } from './helper-classes/border-color/border-color.component';
import { ImagesSizesComponent } from './helper-classes/images-sizes/images-sizes.component';
import { FontStyleComponent } from './helper-classes/font-style/font-style.component';
import { PaddingComponent } from './helper-classes/padding/padding.component';
import { OneSidePaddingComponent } from './helper-classes/one-side-padding/one-side-padding.component';
import { OneSideMarginComponent } from './helper-classes/one-side-margin/one-side-margin.component';
import { MarginComponent } from './helper-classes/margin/margin.component';
import { FontSizesComponent } from './helper-classes/font-sizes/font-sizes.component';
import { FontWeightClassesComponent } from './helper-classes/font-weight-classes/font-weight-classes.component';
import { TextColorsComponent } from './helper-classes/text-colors/text-colors.component';
import { GridOptionsComponent } from './grid/grid-options/grid-options.component';
import { GridColumnComponent } from './grid/grid-column/grid-column.component';
import { VerticalAlignmentComponent } from './grid/vertical-alignment/vertical-alignment.component';
import { HorizontalAlignmentComponent } from './grid/horizontal-alignment/horizontal-alignment.component';
import { NestingComponent } from './grid/nesting/nesting.component';
import { OrderComponent } from './grid/order/order.component';
import { OffsetComponent } from './grid/offset/offset.component';
import { CommonBedgePillsComponent } from './tag-pills/common-bedge-pills/common-bedge-pills.component';
import { BedgeHeadingsComponent } from './tag-pills/bedge-headings/bedge-headings.component';
import { BedgesPartButtonsComponent } from './tag-pills/bedges-part-buttons/bedges-part-buttons.component';
import { CommonProgressBarComponent } from './progress/common-progress-bar/common-progress-bar.component';
import { CustomProgressBarsComponent } from './progress/custom-progress-bars/custom-progress-bars.component';
import { CustomHeightProgressBarsComponent } from './progress/custom-height-progress-bars/custom-height-progress-bars.component';
import { MultipleBarsComponent } from './progress/multiple-bars/multiple-bars.component';
import { ProgressNumberStepsComponent } from './progress/progress-number-steps/progress-number-steps.component';
import { LargeProgressBarsComponent } from './progress/large-progress-bars/large-progress-bars.component';
import { SmallProgressBarsComponent } from './progress/small-progress-bars/small-progress-bars.component';
import { BasicModalComponent } from './modal/basic-modal/basic-modal.component';
import { SimpleComponent } from './modal/basic-modal/simple/simple.component';
import { OpenModalRihoComponent } from './modal/basic-modal/open-modal-riho/open-modal-riho.component';
import { TooltipsPopoversComponent } from './modal/basic-modal/tooltips-popovers/tooltips-popovers.component';
import { ScrollingContentComponent } from './modal/basic-modal/scrolling-content/scrolling-content.component';
import { SizesModalComponent } from './modal/sizes-modal/sizes-modal.component';
import { FullScreenModalComponent } from './modal/sizes-modal/full-screen-modal/full-screen-modal.component';
import { ExtraLargeModalComponent } from './modal/sizes-modal/extra-large-modal/extra-large-modal.component';
import { LargeModalComponent } from './modal/sizes-modal/large-modal/large-modal.component';
import { SmallModalComponent } from './modal/sizes-modal/small-modal/small-modal.component';
import { FullscreenModalsComponent } from './modal/fullscreen-modals/fullscreen-modals.component';
import { FullscreenUiModalComponent } from './modal/fullscreen-modals/fullscreen-ui-modal/fullscreen-ui-modal.component';
import { FullscreenMdModalComponent } from './modal/fullscreen-modals/fullscreen-md-modal/fullscreen-md-modal.component';
import { FullscreenLgModalComponent } from './modal/fullscreen-modals/fullscreen-lg-modal/fullscreen-lg-modal.component';
import { FullscreenXlModalComponent } from './modal/fullscreen-modals/fullscreen-xl-modal/fullscreen-xl-modal.component';
import { FullscreenXxlModalComponent } from './modal/fullscreen-modals/fullscreen-xxl-modal/fullscreen-xxl-modal.component';
import { FullscreenSmModalComponent } from './modal/fullscreen-modals/fullscreen-sm-modal/fullscreen-sm-modal.component';
import { CenteredModalComponent } from './modal/centered-modal/centered-modal.component';
import { ToggleModalsComponent } from './modal/toggle-modals/toggle-modals.component';
import { StaticBackdropModalComponent } from './modal/static-backdrop-modal/static-backdrop-modal.component';
import { CustomModalsComponent } from './modal/custom-modals/custom-modals.component';
import { ProfileModalComponent } from './modal/custom-modals/profile-modal/profile-modal.component';
import { ResultModalComponent } from './modal/custom-modals/result-modal/result-modal.component';
import { BalanceModalComponent } from './modal/custom-modals/balance-modal/balance-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DarkThemeAlertComponent } from './alert/dark-theme-alert/dark-theme-alert.component';
import { LightThemeAlertComponent } from './alert/light-theme-alert/light-theme-alert.component';
import { OutlineDarkLightAlertsComponent } from './alert/outline-dark-light-alerts/outline-dark-light-alerts.component';
import { IconTextAlertsComponent } from './alert/icon-text-alerts/icon-text-alerts.component';
import { DismissingDarkAlertComponent } from './alert/dismissing-dark-alert/dismissing-dark-alert.component';
import { DismissingLightAlertComponent } from './alert/dismissing-light-alert/dismissing-light-alert.component';
import { LiveAlertComponent } from './alert/live-alert/live-alert.component';
import { LeftBorderAlertComponent } from './alert/left-border-alert/left-border-alert.component';
import { AdditionalContentComponent } from './alert/additional-content/additional-content.component';
import { PopoverComponent } from './popover/popover.component';
import { BasicPopoverComponent } from './popover/basic-popover/basic-popover.component';
import { PopoverDirectionComponent } from './popover/popover-direction/popover-direction.component';
import { PopoverOffsetComponent } from './popover/popover-offset/popover-offset.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';
import { BasicTooltipComponent } from './tooltip/basic-tooltip/basic-tooltip.component';
import { ColoredTooltipComponent } from './tooltip/colored-tooltip/colored-tooltip.component';
import { TooltipDirectionsComponent } from './tooltip/tooltip-directions/tooltip-directions.component';
import { HtmlElementsHoverEffectComponent } from './tooltip/html-elements-hover-effect/html-elements-hover-effect.component';
import { FilledTooltipComponent } from './tooltip/filled-tooltip/filled-tooltip.component';
import { BasicDropdownComponent } from './dropdown/basic-dropdown/basic-dropdown.component';
import { RoundedDropdownComponent } from './dropdown/rounded-dropdown/rounded-dropdown.component';
import { SplitDropdownComponent } from './dropdown/split-dropdown/split-dropdown.component';
import { HeadingDropdownComponent } from './dropdown/heading-dropdown/heading-dropdown.component';
import { InputTypeDropdownComponent } from './dropdown/input-type-dropdown/input-type-dropdown.component';
import { DarkDropdownComponent } from './dropdown/dark-dropdown/dark-dropdown.component';
import { UniqueDropdownComponent } from './dropdown/unique-dropdown/unique-dropdown.component';
import { JustifyContentsDropdownComponent } from './dropdown/justify-contents-dropdown/justify-contents-dropdown.component';
import { AlignmentsDropdownComponent } from './dropdown/alignments-dropdown/alignments-dropdown.component';
import { HelperCardDropdownComponent } from './dropdown/helper-card-dropdown/helper-card-dropdown.component';
import { DividerDropdownComponent } from './dropdown/divider-dropdown/divider-dropdown.component';
import { SizingDropdownComponent } from './dropdown/sizing-dropdown/sizing-dropdown.component';
import { SimpleAccordionComponent } from './accordion/simple-accordion/simple-accordion.component';
import { FlushAccordionComponent } from './accordion/flush-accordion/flush-accordion.component';
import { MultipleCollapseAccordionComponent } from './accordion/multiple-collapse-accordion/multiple-collapse-accordion.component';
import { IconsAccordionComponent } from './accordion/icons-accordion/icons-accordion.component';
import { OutlineAccordionComponent } from './accordion/outline-accordion/outline-accordion.component';
import { CollapseAccordionComponent } from './accordion/collapse-accordion/collapse-accordion.component';
import { HorizontalAccordionComponent } from './accordion/horizontal-accordion/horizontal-accordion.component';
import { SimpleTabsComponent } from './tabs/simple-tabs/simple-tabs.component';
import { IconsTabsComponent } from './tabs/icons-tabs/icons-tabs.component';
import { VerticalTabsComponent } from './tabs/vertical-tabs/vertical-tabs.component';
import { PillsTabsComponent } from './tabs/pills-tabs/pills-tabs.component';
import { JustifyTabsComponent } from './tabs/justify-tabs/justify-tabs.component';
import { MaterialStyleLeftTabsComponent } from './tabs/material-style-left-tabs/material-style-left-tabs.component';
import { BorderTabsComponent } from './tabs/border-tabs/border-tabs.component';
import { MaterialStyleTabsComponent } from './tabs/material-style-tabs/material-style-tabs.component';
import { ContextualClassesComponent } from './lists/contextual-classes/contextual-classes.component';
import { HorizontalListsComponent } from './lists/horizontal-lists/horizontal-lists.component';
import { CustomContentListsComponent } from './lists/custom-content-lists/custom-content-lists.component';
import { ListsCheckboxComponent } from './lists/lists-checkbox/lists-checkbox.component';
import { ListsRadiosComponent } from './lists/lists-radios/lists-radios.component';
import { JavaScriptBehaviorComponent } from './lists/java-script-behavior/java-script-behavior.component';
import { NumberedBadgeListsComponent } from './lists/numbered-badge-lists/numbered-badge-lists.component';
import { DisabledListsComponent } from './lists/disabled-lists/disabled-lists.component';
import { ScrollableListsComponent } from './lists/scrollable-lists/scrollable-lists.component';
import { CommonTopListsComponent } from './lists/common-top-lists/common-top-lists.component';
import { ListsNumberComponent } from './lists/lists-number/lists-number.component';

@NgModule({
  declarations: [
    TypographyComponent,
    AvatarsComponent,
    HelperClassesComponent,
    GridComponent,
    TagPillsComponent,
    ProgressComponent,
    ModalComponent,
    AlertComponent,
    HeadingsComponent,
    ColoredHeadingsComponent,
    ListingTypographyComponent,
    DisplayHeadingsComponent,
    InlineTextElementsComponent,
    TextColorComponent,
    BlockquotesComponent,
    SizesComponent,
    StatusIndicatorComponent,
    ShapesComponent,
    RatioComponent,
    GroupingComponent,
    CommonBorderStyleComponent,
    CommonDisplaysStyleComponent,
    StylesBordersComponent,
    DisplaysBordersComponent,
    BackgroundColorsComponent,
    CommonBackgroundColorsComponent,
    BorderColorComponent,
    ImagesSizesComponent,
    FontStyleComponent,
    PaddingComponent,
    OneSidePaddingComponent,
    OneSideMarginComponent,
    MarginComponent,
    FontSizesComponent,
    FontWeightComponent,
    FontWeightClassesComponent,
    TextColorsComponent,
    GridOptionsComponent,
    GridColumnComponent,
    VerticalAlignmentComponent,
    HorizontalAlignmentComponent,
    NestingComponent,
    OrderComponent,
    OffsetComponent,
    CommonBedgePillsComponent,
    BedgeHeadingsComponent,
    BedgesPartButtonsComponent,
    CommonProgressBarComponent,
    CustomProgressBarsComponent,
    CustomHeightProgressBarsComponent,
    MultipleBarsComponent,
    ProgressNumberStepsComponent,
    LargeProgressBarsComponent,
    SmallProgressBarsComponent,
    BasicModalComponent,
    SimpleComponent,
    OpenModalRihoComponent,
    TooltipsPopoversComponent,
    ScrollingContentComponent,
    SizesModalComponent,
    ExtraLargeModalComponent ,
    FullScreenModalComponent,
    LargeModalComponent,
    SmallModalComponent,
    FullscreenModalsComponent,
    FullscreenUiModalComponent,
    FullscreenMdModalComponent,
    FullscreenLgModalComponent,
    FullscreenXlModalComponent,
    FullscreenXxlModalComponent,
    FullscreenSmModalComponent,
    CenteredModalComponent,
    ToggleModalsComponent,
    StaticBackdropModalComponent,
    CustomModalsComponent,
    ProfileModalComponent,
    ResultModalComponent,
    BalanceModalComponent,
    DarkThemeAlertComponent,
    LightThemeAlertComponent,
    OutlineDarkLightAlertsComponent,
    IconTextAlertsComponent,
    DismissingDarkAlertComponent,
    DismissingLightAlertComponent,
    LiveAlertComponent,
    LeftBorderAlertComponent,
    AdditionalContentComponent,
    PopoverComponent,
    BasicPopoverComponent,
    PopoverDirectionComponent,
    PopoverOffsetComponent,
    TooltipComponent,
    DropdownComponent,
    AccordionComponent,
    TabsComponent,
    ListsComponent,
    BasicTooltipComponent,
    ColoredTooltipComponent,
    TooltipDirectionsComponent,
    HtmlElementsHoverEffectComponent,
    FilledTooltipComponent,
    BasicDropdownComponent,
    RoundedDropdownComponent,
    SplitDropdownComponent,
    HeadingDropdownComponent,
    InputTypeDropdownComponent,
    DarkDropdownComponent,
    UniqueDropdownComponent,
    JustifyContentsDropdownComponent,
    AlignmentsDropdownComponent,
    HelperCardDropdownComponent,
    DividerDropdownComponent,
    SizingDropdownComponent,
    SimpleAccordionComponent,
    FlushAccordionComponent,
    MultipleCollapseAccordionComponent,
    IconsAccordionComponent,
    OutlineAccordionComponent,
    CollapseAccordionComponent,
    HorizontalAccordionComponent,
    SimpleTabsComponent,
    IconsTabsComponent,
    VerticalTabsComponent,
    PillsTabsComponent,
    JustifyTabsComponent,
    MaterialStyleLeftTabsComponent,
    BorderTabsComponent,
    MaterialStyleTabsComponent,
    ContextualClassesComponent,
    HorizontalListsComponent,
    CustomContentListsComponent,
    ListsCheckboxComponent,
    ListsRadiosComponent,
    JavaScriptBehaviorComponent,
    NumberedBadgeListsComponent,
    DisabledListsComponent,
    ScrollableListsComponent,
    CommonTopListsComponent,
    ListsNumberComponent,
  ],
  imports: [
    CommonModule,
    UiKitsRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UiKitsModule { }
