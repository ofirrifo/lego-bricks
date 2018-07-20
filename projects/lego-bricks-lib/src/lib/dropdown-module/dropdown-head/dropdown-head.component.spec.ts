import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHeadComponent } from './dropdown-head.component';

describe('DropdownHeadComponent', () => {
  let component: DropdownHeadComponent;
  let fixture: ComponentFixture<DropdownHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
