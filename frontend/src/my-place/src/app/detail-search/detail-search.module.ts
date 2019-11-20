import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailSearchComponent } from './detail-search.component';

@NgModule({
  declarations: [DetailSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DetailSearchModule { }
