import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lb-dropdown-head',
  templateUrl: './dropdown-head.component.html',
  styleUrls: ['./dropdown-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHeadComponent {

  @Input() placeholder = 'Please select';
  @Input() open: boolean;

}
