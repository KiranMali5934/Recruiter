import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard-on-paragraph',
  templateUrl: './clipboard-on-paragraph.component.html',
  styleUrls: ['./clipboard-on-paragraph.component.scss']
})
export class ClipboardOnParagraphComponent {

  public paragraphData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  public basic = false;
  public copyText: string = ""

  constructor(private _clipboardService: ClipboardService) {}

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
