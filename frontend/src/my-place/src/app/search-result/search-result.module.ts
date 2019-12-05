import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SearchResultModule { }
