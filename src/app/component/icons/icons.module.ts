import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { IconsRoutingModule } from './icons-routing.module';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FontawesomeIconsComponent } from './fontawesome-icons/fontawesome-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { IcoIconsComponent } from './ico-icons/ico-icons.component';


@NgModule({
  declarations: [
    FlagIconsComponent,
    FeatherIconsComponent,
    FontawesomeIconsComponent,
    ThemifyIconsComponent,
    WeatherIconsComponent,
    IcoIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule
  ]
})
export class IconsModule { }
