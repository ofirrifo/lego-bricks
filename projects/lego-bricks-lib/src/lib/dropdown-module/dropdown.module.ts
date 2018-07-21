import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LegoToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';
import { DropdownHeadComponent } from './dropdown-head/dropdown-head.component';
import { DropdownBodyComponent } from './dropdown-body/dropdown-body.component';
import { EmptyStateModule } from '../empty-state-module/empty-state.module';

@NgModule({
  imports: [
    CommonModule,
    LegoToggleArrowModule,
    EmptyStateModule
  ],
  declarations: [DropdownComponent, DropdownHeadComponent, DropdownBodyComponent],
  exports: [DropdownComponent],
})
export class LegoDropdownModule { }
