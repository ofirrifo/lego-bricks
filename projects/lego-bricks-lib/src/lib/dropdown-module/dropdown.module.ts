import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LegoToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';
import { DropdownHeadComponent } from './dropdown-head/dropdown-head.component';

@NgModule({
  imports: [
    CommonModule,
    LegoToggleArrowModule
  ],
  declarations: [DropdownComponent, DropdownHeadComponent],
  exports: [DropdownComponent],
})
export class LegoDropdownModule { }
