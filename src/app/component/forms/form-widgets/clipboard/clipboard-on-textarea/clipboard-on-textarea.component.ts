import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard-on-textarea',
  templateUrl: './clipboard-on-textarea.component.html',
  styleUrls: ['./clipboard-on-textarea.component.scss']
})
export class ClipboardOnTextareaComponent {

  clipboardExample2: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has";
  basic = false;
  copyText: string = ""

  constructor(private _clipboardService: ClipboardService) { }

  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied")

  }
  
  cutFunction(data: string) {
    switch (data) {
      case 'clipboardExample2': navigator.clipboard.writeText(this.clipboardExample2); this.clipboardExample2 = '';
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

}
