import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selling-price',
  templateUrl: './selling-price.component.html',
  styleUrls: ['./selling-price.component.scss']
})
export class SellingPriceComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 4;
  public validate: boolean;

  myForm = new FormGroup({
    initalcost: new FormControl('',Validators.required),
    sellingPrice: new FormControl('',Validators.required),
    currency: new FormControl('',Validators.required),
    Productstocks: new FormControl('',Validators.required),
 });

  get initalcost() { 
    return this.myForm.get('initalcost'); 
  }

  get sellingPrice() { 
    return this.myForm.get('sellingPrice'); 
  }

  get currency() { 
    return this.myForm.get('currency'); 
  }

  get Productstocks() { 
    return this.myForm.get('Productstocks'); 
  }

  next(myForm:FormGroup) {
   this.validate = true;
   if (this.myForm.valid) {
     const number = this.activeStep + 1;
     this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
