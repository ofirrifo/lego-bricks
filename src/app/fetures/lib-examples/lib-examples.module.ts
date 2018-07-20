import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from '../../../../projects/lego-bricks-lib/src/lib/checkbox-module/checkbox.module';
import { LayoutModule } from '../../../../projects/lego-bricks-lib/src/lib/layout-module/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/checkbox', pathMatch: 'full'},
      {path: 'checkbox', component: CheckboxComponent},
      {path: '**', component: CheckboxComponent},
    ]),
    CheckboxModule,
    LayoutModule
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class LibExamplesModule { }
