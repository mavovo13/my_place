import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeoSearchComponent } from './geo-search.component';

@NgModule({
  declarations: [GeoSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class GeoSearchModule { }
