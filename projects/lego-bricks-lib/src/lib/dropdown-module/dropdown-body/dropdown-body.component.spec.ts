import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBodyComponent } from './dropdown-body.component';

describe('DropdownBodyComponent', () => {
  let component: DropdownBodyComponent;
  let fixture: ComponentFixture<DropdownBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
