import { TestBed } from '@angular/core/testing';

import { PossibilityService } from './possibility.service';

describe('PossibilityService', () => {
  let service: PossibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PossibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
