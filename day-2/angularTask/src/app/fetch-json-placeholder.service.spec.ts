import { TestBed } from '@angular/core/testing';

import { FetchJsonPlaceholderService } from './fetch-json-placeholder.service';

describe('FetchJsonPlaceholderService', () => {
  let service: FetchJsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchJsonPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
