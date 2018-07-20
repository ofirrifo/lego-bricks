import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lb-toggle-arrow',
  templateUrl: './toggle-arrow.component.html',
  styleUrls: ['./toggle-arrow.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleArrowComponent {

  @Input() open = false;

}
