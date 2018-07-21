import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

  open = false;

  constructor() {
    for (let i = 0; i < 0; i++) {
      this.items.push({id: i, text: `Item ${i}`, selected: false});
    }
  }

  ngOnInit() {
  }

  /**
   * toggle dropdown open state
   */
  toggleOpenState(): void {
    this.open = !this.open;
  }

  selectionChanged(changedItem: any) {
    const items = this.items.map((item: any) => {
      item.selected = item.id === changedItem.id ? !item.selected : false;
      return item;
    });

    this.items = [...items];
  }

}
