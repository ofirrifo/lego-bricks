import { Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';


export const routes: Routes = [
  {path: '', redirectTo: '/checkbox', pathMatch: 'full'},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path: '**', component: CheckboxComponent},
];
