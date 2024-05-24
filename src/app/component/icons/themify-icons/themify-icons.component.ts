import { Component } from '@angular/core';
import { allIcon } from '../../../shared/data/icons/thimify';

@Component({
  selector: 'app-themify-icons',
  templateUrl: './themify-icons.component.html',
  styleUrls: ['./themify-icons.component.scss']
})
export class ThemifyIconsComponent {

  public detail: boolean = false;
  public icon: string;
  public val: string;
  public allIconData = allIcon.themify

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

}
