import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LegoToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';
import { DropdownHeadComponent } from './dropdown-head/dropdown-head.component';
import { DropdownBodyComponent } from './dropdown-body/dropdown-body.component';
import { LegoEmptyStateModule } from '../empty-state-module/empty-state.module';
import { LegoSearchModule } from '../search-module/search.module';

@NgModule({
  imports: [
    CommonModule,
    LegoToggleArrowModule,
    LegoEmptyStateModule,
    LegoSearchModule
  ],
  declarations: [DropdownComponent, DropdownHeadComponent, DropdownBodyComponent],
  exports: [DropdownComponent],
})
export class LegoDropdownModule { }
