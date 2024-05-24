import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-default-file-upload',
  templateUrl: './default-file-upload.component.html',
  styleUrls: ['./default-file-upload.component.scss']
})
export class DefaultFileUploadComponent {
  
  public files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
