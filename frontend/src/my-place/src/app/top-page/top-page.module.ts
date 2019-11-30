import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPageComponent } from './top-page.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeoSearchModule } from '../geo-search/geo-search.module';
import { MapSearchModule } from '../map-search/map-search.module';
import { FavoriteSearchModule } from '../favorite-search/favorite-search.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    GeoSearchModule,
    MapSearchModule,
    FavoriteSearchModule,
    AppRoutingModule
  ]
})
export class TopPageModule { }
