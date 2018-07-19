import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeftPanelComponent],
  exports: [LeftPanelComponent]
})
export class LeftPanelModule { }
