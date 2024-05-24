import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FontawesomeIconsComponent } from './fontawesome-icons/fontawesome-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { IcoIconsComponent } from './ico-icons/ico-icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag-icons',
        component: FlagIconsComponent,
        data: {
          title: "Flag icons",
          breadcrumb: "Flag icons",
        }
      },
      {
        path: 'fontawesome-icons',
        component: FontawesomeIconsComponent,
        data: {
          title: "Font Awesome Icon",
          breadcrumb: "Font Awesome Icon",
        }
      },
      {
        path: 'ico-icons',
        component: IcoIconsComponent,
        data: {
          title: "ICO Icon",
          breadcrumb: "ICO Icon",
        }
      },
      {
        path: 'feather-icons',
        component: FeatherIconsComponent,
        data: {
          title: "Feather Icon",
          breadcrumb: "Feather Icon",
        }
      },
      {
        path: 'themify-icons',
        component: ThemifyIconsComponent,
        data: {
          title: "Themify Icon",
          breadcrumb: "Themify Icon",
        }
      },
      {
        path: 'weather-icons',
        component: WeatherIconsComponent,
        data: {
          title: "Weather Icon",
          breadcrumb: "Weather Icon",
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
