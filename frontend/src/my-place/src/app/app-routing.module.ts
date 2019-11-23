import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { GeoSearchComponent } from './geo-search/geo-search.component';
import { FavoriteSearchComponent } from './favorite-search/favorite-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'map-search', component: MapSearchComponent },
  { path: 'geo-search', component: GeoSearchComponent },
  { path: 'favorite-search', component: FavoriteSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
