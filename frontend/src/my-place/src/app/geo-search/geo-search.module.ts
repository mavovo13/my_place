import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoSearchComponent } from './geo-search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GeoSearchComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GeoSearchModule { }
