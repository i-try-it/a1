import { TestBed, inject } from '@angular/core/testing';

import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitSearchServiceService]
    });
  });

  it('should be created', inject([GitSearchService], (service: GitSearchService) => {
    expect(service).toBeTruthy();
  }));
});
