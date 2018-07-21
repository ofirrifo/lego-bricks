import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../../../../../projects/lego-bricks-lib/src/lib/dropdown-module/models/dropdown-items.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  dropdownItems: DropdownItem[] = this.createMock();
  cloneDropdownItems: DropdownItem[];

  constructor() {}

  ngOnInit() {
    this.cloneDropdownItems = this.deepClone(this.dropdownItems);
  }

  dropdownSearchChanged(searchValue: string): void {
    this.cloneDropdownItems = this.deepClone(this.dropdownItems);
    this.cloneDropdownItems = this.cloneDropdownItems.filter((dropdownItem: DropdownItem) => {
      return dropdownItem.value.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  createMock(arrayLength = 100): DropdownItem[] {
    const dropdownItems = Array.from(Array(arrayLength), (item: any, index) => {
      return { id: index, value: `Item ${index}`, selected: false };
    });

    return dropdownItems;
  }

  deepClone(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }
}
