import { Component, Input, ViewEncapsulation } from '@angular/core';

let checkboxId = 0;

@Component({
  selector: 'lb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {

  @Input() label: string;

  _id = `lego_checkbox_${checkboxId++}`;
  @Input()
  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }


  /**
   * disable checkbox.
   * in case disable = true user can't change checkbox state
   * the css cursor will be auto
   */
  @Input() disabled: boolean;

}
