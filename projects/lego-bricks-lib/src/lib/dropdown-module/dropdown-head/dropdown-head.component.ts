import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lb-dropdown-head',
  templateUrl: './dropdown-head.component.html',
  styleUrls: ['./dropdown-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHeadComponent {

  /**
   * disable dropdown.
   * in case disable = true user can't open and change the selected items
   * the css cursor will be auto
   */
  @Input() disabled: boolean;
  @Input() placeholder = 'Please select';
  @Input() open: boolean;

}
