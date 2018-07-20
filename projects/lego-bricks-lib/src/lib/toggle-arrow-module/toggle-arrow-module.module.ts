import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleArrowComponent } from './toggle-arrow/toggle-arrow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleArrowComponent],
  exports: [ToggleArrowComponent],
})
export class LegoToggleArrowModule { }
