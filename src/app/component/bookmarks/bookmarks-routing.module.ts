import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks.component';

const routes: Routes = [{
  path:'',
  component:BookmarksComponent,
  data: {
    title: 'Bookmarks',
    breadcrumb: 'Bookmarks'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
