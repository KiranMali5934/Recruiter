import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'map-google',
        component : GoogleMapComponent,
        data : {
          title : 'Google Map',
          breadcrumb : 'Google Map'
        }
      },
      {
        path : 'leaflet-map',
        component : LeafletMapComponent,
        data : {
          title : 'Leaflet Map',
          breadcrumb : 'Leaflet Map'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
