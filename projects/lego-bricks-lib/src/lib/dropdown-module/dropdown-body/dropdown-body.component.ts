import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DropdownItem } from '../models/dropdown-items.interface';

@Component({
  selector: 'lb-dropdown-body',
  templateUrl: './dropdown-body.component.html',
  styleUrls: ['./dropdown-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownBodyComponent {
  @Input() searchPlaceholder = 'Search...';
  @Input() items: DropdownItem[] = [];
  @Output() selectionChanged = new EventEmitter<DropdownItem>();
  @Input() showSearch = false;
  @Input() showUnSelectAllItem = true;
  @Input() showLoader = false;

  @Output() searchChanged = new EventEmitter<string>();

  pleaseSelectItem: DropdownItem = { id: null, value: 'Un select all', isPleaseSelectItem: true };

  dropdownItems(index, item: DropdownItem): string | number {
    return item ? item.id : undefined;
  }
}
