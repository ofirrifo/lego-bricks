import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleArrowComponent } from './toggle-arrow.component';

describe('ToggleArrowComponent', () => {
  let component: ToggleArrowComponent;
  let fixture: ComponentFixture<ToggleArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
