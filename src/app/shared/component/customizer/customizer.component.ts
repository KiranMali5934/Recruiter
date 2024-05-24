import { Component, HostListener, TemplateRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})
export class CustomizerComponent {

  public customizer: string = '';
  public sidebarType: string = 'compact-wrapper';
  public sidebarSetting: string = "default-sidebar";
  public screenwidth: number = window.innerWidth;
  public layoutType: string = 'ltr';

  constructor(private modalService: NgbModal, public layoutService: LayoutService) { }

  @HostListener("window:resize", ["$event"])

  onResize(event: { target: { innerWidth: number }; }) {
    this.screenwidth = event.target.innerWidth;
  }

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }


  customizeSidebarType(val: string) {
    this.sidebarType = val;
  }

  copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox)
  }

}
