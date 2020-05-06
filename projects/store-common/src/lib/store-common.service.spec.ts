import { TestBed } from '@angular/core/testing';

import { StoreCommonService } from './store-common.service';

describe('StoreCommonService', () => {
  let service: StoreCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
