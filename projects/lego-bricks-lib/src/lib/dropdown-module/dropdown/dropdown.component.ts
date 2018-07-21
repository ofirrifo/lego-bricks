import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { DropdownItem } from '../models/dropdown-items.interface';

@Component({
  selector: 'lb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {
  /**
   * disable dropdown.
   * in case disable = true user can't open and change the selected items
   * the css cursor will be auto
   */
  @Input() disabled: boolean;
  @Input() placeholder = 'Please select';
  @Input() searchPlaceholder = 'Search...';
  @Input() showSearch = true;
  @Input() closeOnSelect = true;
  @Input() multiSelect = false;
  @Input() showUnSelectAllItem = true;

  _items: DropdownItem[] = [];
  @Input()
  set items(items: DropdownItem[]) {
    if (this.itemsValid(items)) {
      this._items = items;
    }
  }

  get items(): DropdownItem[] {
    return this._items;
  }

  @Output() searchChanged = new EventEmitter<string>();
  @Output() selectionChanged = new EventEmitter<DropdownItem>();

  open = false;
  selectedItemsMap = {};

  constructor() {}

  ngOnInit() {}

  /**
   * toggle dropdown open state
   */
  toggleOpenState(): void {
    this.open = !this.open;
  }

  /**
   * on selection change
   * update each item if need to be selected or not
   * for the changedItem we just toggle his selected property and all other set to false
   * @param changedItem
   */
  onSelectionChanged(changedItem: DropdownItem): void {
    const items = this.items.map((item: any) => {
      item.selected = item.id === changedItem.id ? !item.selected : false;
      this.updateSelectedItemsMap(item);
      return item;
    });

    this.items = [...items];
    this.selectedItemsMap = { ...this.selectedItemsMap };

    if (this.closeOnSelect) {
      this.toggleOpenState();
    }

    this.selectionChanged.emit(changedItem);
  }

  /**
   * for each given dropdown item we check if need to add or remove from the selectedItemsMap object
   * @param {DropdownItem} dropdownItem
   */
  updateSelectedItemsMap(dropdownItem: DropdownItem): void {
    if (dropdownItem.selected) {
      this.selectedItemsMap[dropdownItem.id] = dropdownItem;
    } else {
      delete this.selectedItemsMap[dropdownItem.id];
    }
  }

  /**
   * make sure
   * - id property exist for all items
   * - value property exist for all items
   * - in case single select only one item allow to be selected
   * - all ids are unique
   * @param {DropdownItem[]} items
   * @returns {boolean}
   */
  itemsValid(items: DropdownItem[]): boolean {
    const itemsMap = {};
    let numOfSelectedItems = 0;
    let valid = true;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.hasOwnProperty('id')) {
        console.error('Not all items has "id" property');
        valid = false;
        break;
      }
      if (!item.hasOwnProperty('value')) {
        console.error('Not all items has "value" property');
        valid = false;
        break;
      }
      if (!this.multiSelect && item.selected) {
        ++numOfSelectedItems;
        if (numOfSelectedItems > 1) {
          console.error('Dropdown in single select mode and more than one items selected.');
          valid = false;
          break;
        }
      }
      if (itemsMap[item.id]) {
        console.error('Not all ids are unique.');
        valid = false;
        break;
      }
      itemsMap[item.id] = true;
    }

    return valid;
  }
}
