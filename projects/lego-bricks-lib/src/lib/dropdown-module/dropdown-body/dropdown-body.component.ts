import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lb-dropdown-body',
  templateUrl: './dropdown-body.component.html',
  styleUrls: ['./dropdown-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownBodyComponent {

  @Input() searchPlaceholder = 'Search...';
  @Input() items = [];
  @Output() selectionChanged = new EventEmitter<any>();

}
