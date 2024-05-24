import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';

import { FormWidgetsRoutingModule } from './form-widgets-routing.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { Select2Component } from './select2/select2.component';
import { SwitchComponent } from './switch/switch.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { DefaultTouchspinComponent } from './touchspin/default-touchspin/default-touchspin.component';
import { OutlinedTouchspinComponent } from './touchspin/outlined-touchspin/outlined-touchspin.component';
import { IconsWithPrefixPostfixComponent } from './touchspin/icons-with-prefix-postfix/icons-with-prefix-postfix.component';
import { ButtonsWithPrefixPostfixComponent } from './touchspin/buttons-with-prefix-postfix/buttons-with-prefix-postfix.component';
import { RoundedTouchspinComponent } from './touchspin/rounded-touchspin/rounded-touchspin.component';
import { CustomSwitchComponent } from './switch/custom-switch/custom-switch.component';
import { IconsSwitchComponent } from './switch/icons-switch/icons-switch.component';
import { UncheckedSwitchComponent } from './switch/unchecked-switch/unchecked-switch.component';
import { BordersWithIconsComponent } from './switch/borders-with-icons/borders-with-icons.component';
import { SwitchSizingComponent } from './switch/switch-sizing/switch-sizing.component';
import { VariationSwitchesComponent } from './switch/variation-switches/variation-switches.component';
import { SwihchWithIocnsComponent } from './switch/swihch-with-iocns/swihch-with-iocns.component';
import { DisabledOutlineSwitchComponent } from './switch/disabled-outline-switch/disabled-outline-switch.component';
import { SimpleTypeheadComponent } from './typehead/simple-typehead/simple-typehead.component';
import { WikipediaSearchComponent } from './typehead/wikipedia-search/wikipedia-search.component';
import { OpenFocusTypeheadComponent } from './typehead/open-focus-typehead/open-focus-typehead.component';
import { FormattedResultsComponent } from './typehead/formatted-results/formatted-results.component';
import { SelectOnExactComponent } from './typehead/select-on-exact/select-on-exact.component';
import { TemlateForResultsComponent } from './typehead/temlate-for-results/temlate-for-results.component';
import { PerventManualEntryComponent } from './typehead/pervent-manual-entry/pervent-manual-entry.component';
import { GlobalConfigurationComponent } from './typehead/global-configuration/global-configuration.component';
import { ClipboardTextInputComponent } from './clipboard/clipboard-text-input/clipboard-text-input.component';
import { ClipboardOnParagraphComponent } from './clipboard/clipboard-on-paragraph/clipboard-on-paragraph.component';
import { ClipboardOnTextareaComponent } from './clipboard/clipboard-on-textarea/clipboard-on-textarea.component';
import { CopyProtionFormParagraphComponent } from './clipboard/copy-protion-form-paragraph/copy-protion-form-paragraph.component';
import { DefaultSelect2Component } from './select2/default-select2/default-select2.component';
import { FullColoredVariantComponent } from './select2/full-colored-variant/full-colored-variant.component';
import { OutlineColorVariantComponent } from './select2/outline-color-variant/outline-color-variant.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    ClipboardComponent,
    Select2Component,
    SwitchComponent,
    TouchspinComponent,
    TypeheadComponent,
    DefaultTouchspinComponent,
    OutlinedTouchspinComponent,
    IconsWithPrefixPostfixComponent,
    ButtonsWithPrefixPostfixComponent,
    RoundedTouchspinComponent,
    CustomSwitchComponent,
    IconsSwitchComponent,
    UncheckedSwitchComponent,
    BordersWithIconsComponent,
    SwitchSizingComponent,
    VariationSwitchesComponent,
    SwihchWithIocnsComponent,
    DisabledOutlineSwitchComponent,
    SimpleTypeheadComponent,
    WikipediaSearchComponent,
    OpenFocusTypeheadComponent,
    FormattedResultsComponent,
    SelectOnExactComponent,
    TemlateForResultsComponent,
    PerventManualEntryComponent,
    GlobalConfigurationComponent,
    ClipboardTextInputComponent,
    ClipboardOnParagraphComponent,
    ClipboardOnTextareaComponent,
    CopyProtionFormParagraphComponent,
    DefaultSelect2Component,
    FullColoredVariantComponent,
    OutlineColorVariantComponent
  ],
  imports: [
    CommonModule,
    FormWidgetsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    SharedModule,
    ClipboardModule
  ]
})
export class FormWidgetsModule { }
