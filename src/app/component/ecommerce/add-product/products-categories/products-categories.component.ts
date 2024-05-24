import { Component, EventEmitter, Output } from '@angular/core';
import { NewCategoriesComponent } from './new-categories/new-categories.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public items = [];
  public activeStep: number = 3;
  public validate: boolean;
  
  constructor(private modalService: NgbModal) { }

  myForm = new FormGroup({
    product: new FormControl('',Validators.required),
    productStatus: new FormControl('',Validators.required),
    addTag :new FormControl('',Validators.required),
    date :new FormControl('',Validators.required),

 });

 next(myForm:FormGroup) {
   this.validate = true;
   if (this.myForm.valid) {
     const number = this.activeStep + 1;
     this.activeSteps.emit(number);
    }
  }

  get product() { 
    return this.myForm.get('product'); 
  }

  get addTag() { 
    return this.myForm.get('addTag'); 
  }

  get date() { 
    return this.myForm.get('date'); 
  }

  get productStatus() { 
    return this.myForm.get('productStatus'); 
  }
  
  newCategories() {
    const model = this.modalService.open( NewCategoriesComponent, { size: 'lg' });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
