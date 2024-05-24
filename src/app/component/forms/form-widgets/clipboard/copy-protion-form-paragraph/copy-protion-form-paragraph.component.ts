import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-copy-protion-form-paragraph',
  templateUrl: './copy-protion-form-paragraph.component.html',
  styleUrls: ['./copy-protion-form-paragraph.component.scss']
})
export class CopyProtionFormParagraphComponent {

  public copyHighlightTxt: string = 'dolor sit amet';
  public basic = false;
  public copyText: string = ""

  constructor(private _clipboardService: ClipboardService) { }

  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied")

  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

}
