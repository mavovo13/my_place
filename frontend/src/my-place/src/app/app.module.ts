import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { TopPageComponent } from './top-page/top-page.component';
import { DetailSearchModule } from './detail-search/detail-search.module';


@NgModule({
  declarations: [
    AppComponent,
    MapSearchComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    DetailSearchModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
