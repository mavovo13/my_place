import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageModule } from './top-page/top-page.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopPageModule,
    SearchResultModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
