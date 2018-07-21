import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LegoInputModule } from '../input-module/input.module';

@NgModule({
  imports: [
    CommonModule,
    LegoInputModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class LegoSearchModule { }
