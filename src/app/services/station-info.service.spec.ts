import { TestBed } from '@angular/core/testing';

import { StationInfoService } from './station-info.service';

describe('StationInfoService', () => {
  let service: StationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
