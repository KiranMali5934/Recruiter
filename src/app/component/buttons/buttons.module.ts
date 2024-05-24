import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { EdgeStyleComponent } from './edge-style/edge-style.component';
import { FlatStyleComponent } from './flat-style/flat-style.component';
import { RaisedStyleComponent } from './raised-style/raised-style.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonButtonGorupComponent } from './button-group/common-button-gorup/common-button-gorup.component';
import { CommonOutlineButtonComponent } from './button-group/common-outline-button/common-outline-button.component';
import { OutlineCustomButtonGroupComponent } from './button-group/outline-custom-button-group/outline-custom-button-group.component';
import { OutlineCustomButtonGroup2Component } from './button-group/outline-custom-button-group2/outline-custom-button-group2.component';
import { RadioButtonGroupComponent } from './button-group/radio-button-group/radio-button-group.component';
import { CheckboxButtonGroupComponent } from './button-group/checkbox-button-group/checkbox-button-group.component';
import { NestingComponent } from './button-group/nesting/nesting.component';
import { VerticalComponent } from './button-group/vertical/vertical.component';

@NgModule({
  declarations: [
    DefaultStyleComponent,
    EdgeStyleComponent,
    FlatStyleComponent,
    RaisedStyleComponent,
    ButtonGroupComponent,
    CommonButtonGorupComponent,
    CommonOutlineButtonComponent,
    OutlineCustomButtonGroupComponent,
    OutlineCustomButtonGroup2Component,
    RadioButtonGroupComponent,
    CheckboxButtonGroupComponent,
    NestingComponent,
    VerticalComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ButtonsModule { }
