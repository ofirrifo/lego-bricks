import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmptyStateComponent],
  exports: [EmptyStateComponent],
})
export class EmptyStateModule { }
