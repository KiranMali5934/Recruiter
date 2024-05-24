import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-quick-option',
  templateUrl: './quick-option.component.html',
  styleUrl: './quick-option.component.scss'
})
export class QuickOptionComponent {

  public layoutType: string = 'ltr';
  public sidebarType: string = 'compact-wrapper';
  public screenwidth = window.innerWidth;
  public icon: string = "fill-svg";

  constructor(public layout: LayoutService) { }

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if (val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body?.classList.add("rtl");
      document.body?.classList.remove("box-layout")
    } else if (val == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body?.classList.add("box-layout");
    } else{
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body?.classList.add("ltr");
      document.body?.classList.remove("box-layout")
    }
  }

  customizeSidebarType(val: string) {
    if (this.screenwidth < 1200) {
      if (val == 'horizontal-wrapper') {
        this.layout.config.settings.sidebar_type = 'compact-wrapper'
      }
    } else {
      this.sidebarType = val;
      this.layout.config.settings.sidebar_type = val;
      this.layout.customizer = '';
    }
  }

  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;
  }

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == "fill-svg") {
      document.getElementsByTagName("page-sub-header")[0]?.setAttribute("icon", val);
    } else {
      document.getElementsByTagName("page-sub-header")[0]?.setAttribute("icon", val);
    }
  }

}
