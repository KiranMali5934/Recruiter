import { Component } from '@angular/core';
import { darkThemAlert } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-dark-theme-alert',
  templateUrl: './dark-theme-alert.component.html',
  styleUrls: ['./dark-theme-alert.component.scss']
})
export class DarkThemeAlertComponent {

  public darkThemeData = darkThemAlert;

}
