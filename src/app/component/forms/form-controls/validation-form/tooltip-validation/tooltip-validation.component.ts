import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-validation',
  templateUrl: './tooltip-validation.component.html',
  styleUrls: ['./tooltip-validation.component.scss']
})
export class TooltipValidationComponent {

  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }


}
