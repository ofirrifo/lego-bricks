import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule } from '@angular/router';
import { LegoCheckboxModule } from '../../../../projects/lego-bricks-lib/src/lib/checkbox-module/checkbox.module';
import { LegoLayoutModule } from '../../../../projects/lego-bricks-lib/src/lib/layout-module/layout.module';
import { LegoDropdownModule } from '../../../../projects/lego-bricks-lib/src/lib/dropdown-module/dropdown.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { routes } from './lib-examples.routes';
import { LegoInputModule } from '../../../../projects/lego-bricks-lib/src/lib/input-module/input.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LegoCheckboxModule,
    LegoLayoutModule,
    LegoDropdownModule,
    LegoInputModule
  ],
  declarations: [CheckboxComponent, DropdownComponent],
})
export class LibExamplesModule {
}
