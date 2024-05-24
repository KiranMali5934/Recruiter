import { Component } from '@angular/core';
import { allIcon } from '../../../shared/data/icons/thimify';

@Component({
  selector: 'app-fontawesome-icons',
  templateUrl: './fontawesome-icons.component.html',
  styleUrls: ['./fontawesome-icons.component.scss']
})
export class FontawesomeIconsComponent {
  
  public detail: boolean = false;
  public icon: string;
  public val: string;

  public allIconData = allIcon.fontawesome

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="fa fa-' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="fa fa-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

}
