import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/checkbox', pathMatch: 'full'},
      {path: 'checkbox', component: CheckboxComponent},
      {path: '**', component: CheckboxComponent},
    ])
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class LibExamplesModule { }
