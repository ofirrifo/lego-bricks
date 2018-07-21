import { Component, OnInit } from '@angular/core';
import { DropdownItems } from '../../../../../projects/lego-bricks-lib/src/lib/dropdown-module/models/dropdown-items.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dropdownItems: DropdownItems[] = this.createMock();
  cloneDropdownItems: DropdownItems[];

  constructor() {
  }

  ngOnInit() {
    this.cloneDropdownItems = this.deepClone(this.dropdownItems);
  }

  dropdownSearchChanged(searchValue: string): void {
    this.cloneDropdownItems = this.deepClone(this.dropdownItems);
    this.cloneDropdownItems = this.cloneDropdownItems.filter((dropdownItems: DropdownItems) => {
      return dropdownItems.text.includes(searchValue);
    });
  }

  createMock(): DropdownItems[] {
    const dropdownItems = [];
    for (let i = 0; i < 100; i++) {
      dropdownItems.push({id: i, text: `Item ${i}`, selected: false});
    }
    return dropdownItems;
  }

  deepClone(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }


}
