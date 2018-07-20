import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule } from '@angular/router';
import { LegoCheckboxModule } from '../../../../projects/lego-bricks-lib/src/lib/checkbox-module/checkbox.module';
import { LegoLayoutModule } from '../../../../projects/lego-bricks-lib/src/lib/layout-module/layout.module';
import { LegoDropdownModule } from '../../../../projects/lego-bricks-lib/src/lib/dropdown-module/dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/checkbox', pathMatch: 'full'},
      {path: 'checkbox', component: CheckboxComponent},
      {path: '**', component: CheckboxComponent},
    ]),
    LegoCheckboxModule,
    LegoLayoutModule,
    LegoDropdownModule
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class LibExamplesModule { }
