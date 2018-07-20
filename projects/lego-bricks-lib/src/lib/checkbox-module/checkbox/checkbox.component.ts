import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

let checkboxId = 0;

@Component({
  selector: 'lb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  /**
   * checkbox label text.
   * by default display to the right of the checkbox.
   * set @Input() labelToLeft = true will display label to the left of the checkbox
   * in case checkbox enabled click on the label will change the checkbox state
   * in case checkbox disable click will not change the checkbox state
   */
  @Input() label: string;

  /**
   * true will display label to the left of the checkbox
   */
  @Input() labelToLeft: boolean;

  _id: string;
  @Input()
  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    if (this._id === void 0) {
      this.id = `lego_checkbox_${checkboxId++}`;
    }
    return this._id;
  }

  @Input() checked: boolean;
  @Input() indeterminate: boolean;
  @Input() tabIndex: number;

  /**
   * disable checkbox.
   * in case disable = true user can't change checkbox state
   * the css cursor will be auto
   */
  @Input() disabled: boolean;

  @Output() checkboxClicked = new EventEmitter<any>();

  onCheckboxClicked(checkboxElement: any) {
    checkboxElement.blur();
    this.checkboxClicked.emit({checked: checkboxElement.checked});
  }

}
