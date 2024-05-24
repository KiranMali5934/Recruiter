import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';
import { ComingBgVideoComponent } from './coming-bg-video/coming-bg-video.component';

const routes: Routes = [
{
  path: '',
  children: [
    {
      path: 'coming-soon-simple',
      component: ComingSimpleComponent
    },
    {
      path: 'coming-soon-video',
      component: ComingBgVideoComponent
    },
    {
      path: 'coming-soon-image',
      component: ComingBgImageComponent 
    },
  ]
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
