import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'lb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() debounceTime = 400;
  @Input() minNumOfChars = 0;
  @Output() searchChanged = new EventEmitter<string>();

  ngUnSubscribe: Subject<void> = new Subject<void>();
  search$ = new Subject<string>();


  constructor() {
  }

  ngOnInit() {
    this.search$.pipe(
      takeUntil(this.ngUnSubscribe),
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      filter(value => value.length === 0 || value.length >= this.minNumOfChars)
    ).subscribe((value: string) => {
      this.searchChanged.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

}
