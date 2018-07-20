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

  @Input() items: DropdownItems[] = [
    {id: '1', text: 'Item 1', selected: false},
    {id: '2', text: 'Item 2', selected: false},
    {id: '3', text: 'Item 3', selected: false}
  ];
  @Input() placeholder = 'Please select';
  @Input() searchPlaceholder = 'Search...';

  open = false;

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

  selectionChanged(changedItem: any) {
    const items = this.items.map((item: any) => {
      item.selected = item.id === changedItem.id ? !item.selected : false;
      return item;
    });

    this.items = [...items];
  }

}
