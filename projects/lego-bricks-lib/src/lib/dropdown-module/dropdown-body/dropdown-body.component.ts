import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DropdownItems } from '../models/dropdown-items.interface';

@Component({
  selector: 'lb-dropdown-body',
  templateUrl: './dropdown-body.component.html',
  styleUrls: ['./dropdown-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownBodyComponent {

  @Input() searchPlaceholder = 'Search...';
  @Input() items: DropdownItems[] = [];
  @Output() selectionChanged = new EventEmitter<any>();
  @Input() showSearch = false;

  @Output() searchChanged = new EventEmitter<string>();

  dropdownItems(index, item): void {
    return item ? item.id : undefined;
  }

}
