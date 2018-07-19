import { TestBed, inject } from '@angular/core/testing';

import { LegoBricksLibService } from './lego-bricks-lib.service';

describe('LegoBricksLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegoBricksLibService]
    });
  });

  it('should be created', inject([LegoBricksLibService], (service: LegoBricksLibService) => {
    expect(service).toBeTruthy();
  }));
});
