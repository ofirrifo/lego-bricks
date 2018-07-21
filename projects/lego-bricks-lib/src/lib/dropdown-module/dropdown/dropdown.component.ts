import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DropdownItems } from '../models/dropdown-items.interface';

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
  @Input() items: DropdownItems[] = [];
  @Input() placeholder = 'Please select';
  @Input() searchPlaceholder = 'Search...';
  @Input() showSearch = true;

  @Output() searchChanged = new EventEmitter<string>();

  open = false;
  selectedItemsMap = {};

  constructor() {

  }

  ngOnInit() {
  }

  /**
   * toggle dropdown open state
   */
  toggleOpenState(): void {
    this.open = !this.open;
  }

  selectionChanged(changedItem: any): void {
    const items = this.items.map((item: any) => {
      item.selected = item.id === changedItem.id ? !item.selected : false;
      if (item.selected) {
        this.selectedItemsMap[item.id] = item;
      } else {
        delete this.selectedItemsMap[item.id];
      }
      return item;
    });


    this.items = [...items];
    this.selectedItemsMap = {...this.selectedItemsMap};
  }


}
