import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  styleUrls: ['./single-file-upload.component.scss']
})
export class SingleFileUploadComponent {

  public files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent) {
    if (this.files.length >= 1) {
      alert("No more files please!")
    } else {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
