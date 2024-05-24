import { Component } from '@angular/core';
import { webDesigner, UxDesigner, IOTdeveloper } from '../../../../shared/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tabs',
  templateUrl: './justify-tabs.component.html',
  styleUrls: ['./justify-tabs.component.scss']
})
export class JustifyTabsComponent {

  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;

}
