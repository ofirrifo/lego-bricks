import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoBricksLibComponent } from './lego-bricks-lib.component';

describe('LegoBricksLibComponent', () => {
  let component: LegoBricksLibComponent;
  let fixture: ComponentFixture<LegoBricksLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoBricksLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoBricksLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
