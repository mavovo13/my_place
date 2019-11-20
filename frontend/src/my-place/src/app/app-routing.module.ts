import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { DetailSearchComponent } from './detail-search/detail-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'map-search', component: MapSearchComponent },
  { path: 'detail-search', component: DetailSearchComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
