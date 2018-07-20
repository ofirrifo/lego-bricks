import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LegoToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';

@NgModule({
  imports: [
    CommonModule,
    LegoToggleArrowModule
  ],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class LegoDropdownModule { }
