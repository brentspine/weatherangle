import { TestBed } from '@angular/core/testing';

import { PlaceLookupService } from './place-lookup.service';

describe('PlaceLookupService', () => {
  let service: PlaceLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
