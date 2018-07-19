import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage/stage.component';
import { RouterModule } from '@angular/router';
import { LibExamplesModule } from '../lib-examples/lib-examples.module';
import { CheckboxComponent } from '../lib-examples/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    LibExamplesModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/checkbox', pathMatch: 'full'},
      {path: 'checkbox', component: CheckboxComponent},
      {path: '**', component: CheckboxComponent},
    ])
  ],
  declarations: [StageComponent],
  exports: [StageComponent],
})
export class StageModule {
}
