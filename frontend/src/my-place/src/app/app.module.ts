import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { TopPageComponent } from './top-page/top-page.component';
import { GeoSearchModule } from './geo-search/geo-search.module';
import { FavoriteSearchComponent } from './favorite-search/favorite-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MapSearchComponent,
    TopPageComponent,
    FavoriteSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    GeoSearchModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
