import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DropdownItems } from '../models/dropdown-items.interface';

@Component({
  selector: 'lb-dropdown-head',
  templateUrl: './dropdown-head.component.html',
  styleUrls: ['./dropdown-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHeadComponent {
  /**
   * disable dropdown.
   * in case disable = true user can't open and change the selected items
   * the css cursor will be auto
   */
  @Input() disabled: boolean;
  @Input() placeholder = 'Please select';
  @Input() open: boolean;

  value = '';

  @Input()
  set selectedItemsMap(selectedItemsMap: Record<string, DropdownItems>) {
    const selectedItems: DropdownItems[] = Object.values(selectedItemsMap);
    if (selectedItems.length === 0) {
      this.value = '';
    } else if (selectedItems.length === 1) {
      this.value = selectedItems[0].text;
    } else {
      this.value = `${selectedItems.length} selected`;
    }
  }
}
