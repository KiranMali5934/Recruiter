import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { TooltipValidationComponent } from './validation-form/tooltip-validation/tooltip-validation.component';
import { FormValidationComponent } from './validation-form/form-validation/form-validation.component';
import { BrowserDefaultsComponent } from './validation-form/browser-defaults/browser-defaults.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { BasicFormComponent } from './base-input/basic-form/basic-form.component';
import { FloatingFormComponent } from './base-input/floating-form/floating-form.component';
import { SelectSizingComponent } from './base-input/select-sizing/select-sizing.component';
import { FormControlSizingComponent } from './base-input/form-control-sizing/form-control-sizing.component';
import { FileInputComponent } from './base-input/file-input/file-input.component';
import { FlatInputStyleComponent } from './base-input/flat-input-style/flat-input-style.component';
import { BasicInputControlComponent } from './base-input/basic-input-control/basic-input-control.component';
import { EdgesInputStyleComponent } from './base-input/edges-input-style/edges-input-style.component';
import { BasicFloatingInputControlComponent } from './base-input/basic-floating-input-control/basic-floating-input-control.component';
import { FormDetailsComponent } from './base-input/basic-floating-input-control/form-details/form-details.component';
import { RaiseInputStyleComponent } from './base-input/raise-input-style/raise-input-style.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { AnimatedButtonsComponent } from './checkbox-radio/animated-buttons/animated-buttons.component';
import { DefaultCheckboxComponent } from './checkbox-radio/default-checkbox/default-checkbox.component';
import { CustomCheckboxComponent } from './checkbox-radio/custom-checkbox/custom-checkbox.component';
import { DefaultRadioComponent } from './checkbox-radio/default-radio/default-radio.component';
import { ImagesCheckboxComponent } from './checkbox-radio/images-checkbox/images-checkbox.component';
import { ImagesRadioComponent } from './checkbox-radio/images-radio/images-radio.component';
import { CustomRadioComponent } from './checkbox-radio/custom-radio/custom-radio.component';
import { DefaultSwitchesComponent } from './checkbox-radio/default-switches/default-switches.component';
import { InlineInputTypesComponent } from './checkbox-radio/inline-input-types/inline-input-types.component';
import { BasicRadioCheckboxComponent } from './checkbox-radio/basic-radio-checkbox/basic-radio-checkbox.component';
import { RadioToggleButtonsComponent } from './checkbox-radio/radio-toggle-buttons/radio-toggle-buttons.component';
import { OutlinedCheckboxStylesComponent } from './checkbox-radio/outlined-checkbox-styles/outlined-checkbox-styles.component';
import { DataListComponent } from './base-input/basic-input-control/data-list/data-list.component';
import { DateTimeComponent } from './base-input/basic-input-control/date-time/date-time.component';
import { ButtonAddonsComponent } from './input-groups/button-addons/button-addons.component';
import { CustomFormsComponent } from './input-groups/custom-forms/custom-forms.component';
import { CustomFileInputComponent } from './input-groups/custom-file-input/custom-file-input.component';
import { ButtonsWithDropdownsComponent } from './input-groups/buttons-with-dropdowns/buttons-with-dropdowns.component';
import { SegmentedButtonsComponent } from './input-groups/segmented-buttons/segmented-buttons.component';
import { CheckboxesRadiosComponent } from './input-groups/checkboxes-radios/checkboxes-radios.component';
import { SizingComponent } from './input-groups/sizing/sizing.component';
import { MultipleInputsComponent } from './input-groups/multiple-inputs/multiple-inputs.component';
import { BasicInputGroupsComponent } from './input-groups/basic-input-groups/basic-input-groups.component';
import { VariationAddonsComponent } from './input-groups/variation-addons/variation-addons.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { DateFormatComponent } from './input-mask/date-format/date-format.component';
import { DafaultInputMaskComponent } from './input-mask/dafault-input-mask/dafault-input-mask.component';
import { TimeFormatComponent } from './input-mask/time-format/time-format.component';
import { VariationRadioComponent } from './mega-options/variation-radio/variation-radio.component';
import { VariationCheckboxComponent } from './mega-options/variation-checkbox/variation-checkbox.component';
import { DefaultStyleComponent } from './mega-options/default-style/default-style.component';
import { WithoutBordersStyleComponent } from './mega-options/without-borders-style/without-borders-style.component';
import { SolidBorderStyleComponent } from './mega-options/solid-border-style/solid-border-style.component';
import { OfferStyleBorderComponent } from './mega-options/offer-style-border/offer-style-border.component';
import { InlineStyleComponent } from './mega-options/inline-style/inline-style.component';
import { VerticalStyleComponent } from './mega-options/vertical-style/vertical-style.component';
import { HorizontalStyleComponent } from './mega-options/horizontal-style/horizontal-style.component';
import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/app/auth/forgot-password/forgot-password.component';
import { RecruiterManagementModule } from '../../recruiter-management/recruiter-management.module';
import { RecruiterRegistrationComponent } from 'src/app/auth/recruiter-registration/recruiter-registration.component';


@NgModule({
  declarations: [
    ValidationFormComponent,
    TooltipValidationComponent,
    FormValidationComponent,
    BrowserDefaultsComponent,
    BaseInputComponent,
    BasicFormComponent,
    FloatingFormComponent,
    SelectSizingComponent,
    FormControlSizingComponent,
    FileInputComponent,
    FlatInputStyleComponent,
    BasicInputControlComponent,
    EdgesInputStyleComponent,
    BasicFloatingInputControlComponent ,
    FormDetailsComponent,
    RaiseInputStyleComponent,
    CheckboxRadioComponent,
    AnimatedButtonsComponent,
    DefaultCheckboxComponent,
    CustomCheckboxComponent,
    DefaultRadioComponent,
    ImagesCheckboxComponent,
    ImagesRadioComponent,
    CustomRadioComponent,
    DefaultSwitchesComponent,
    InlineInputTypesComponent,
    BasicRadioCheckboxComponent,
    RadioToggleButtonsComponent,
    OutlinedCheckboxStylesComponent,
    DataListComponent,
    DateTimeComponent,
    ButtonAddonsComponent,
    CustomFormsComponent,
    CustomFileInputComponent,
    ButtonsWithDropdownsComponent,
    SegmentedButtonsComponent,
    CheckboxesRadiosComponent,
    SizingComponent,
    MultipleInputsComponent,
    BasicInputGroupsComponent,
    VariationAddonsComponent,
    InputGroupsComponent,
    InputMaskComponent,
    MegaOptionsComponent,
    DateFormatComponent,
    DafaultInputMaskComponent,
    TimeFormatComponent,
    VariationRadioComponent,
    VariationCheckboxComponent,
    DefaultStyleComponent,
    WithoutBordersStyleComponent,
    SolidBorderStyleComponent,
    OfferStyleBorderComponent,
    InlineStyleComponent,
    VerticalStyleComponent,
    HorizontalStyleComponent,
    RecruiterRegistrationComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    SharedModule,
    NgbModule
  ]
})
export class FormControlsModule { }
