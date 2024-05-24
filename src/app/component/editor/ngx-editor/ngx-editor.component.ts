import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss'
})
export class NgxEditorComponent {

  editor: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
