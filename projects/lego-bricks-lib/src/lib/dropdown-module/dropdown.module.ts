import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LegoToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';
import { DropdownHeadComponent } from './dropdown-head/dropdown-head.component';
import { DropdownBodyComponent } from './dropdown-body/dropdown-body.component';
import { LegoEmptyStateModule } from '../empty-state-module/empty-state.module';
import { LegoInputModule } from '../input-module/input.module';

@NgModule({
  imports: [
    CommonModule,
    LegoToggleArrowModule,
    LegoEmptyStateModule,
    LegoInputModule
  ],
  declarations: [DropdownComponent, DropdownHeadComponent, DropdownBodyComponent],
  exports: [DropdownComponent],
})
export class LegoDropdownModule { }
