import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();
  
  public activeStep: number = 2;
  public files: File[] = [];
  public files2:File[]=[];

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }
  
  ongallary(event: NgxDropzoneChangeEvent){
    this.files2.push(...event.addedFiles);
  }

  ongallaryremove(event: File){
    this.files2.splice(this.files.indexOf(event), 1);
  }

  onRemove(event: File ) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  myForm = new FormGroup({ });

  next(myForm:FormGroup) {
    if(this.files.length == 0 || this.files2.length == 0){
   Swal.fire({
       text:'please upload the product image.',
       icon: 'warning',
       showCancelButton: true,
     })
    }
    else{
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }
  
  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
    }

}
