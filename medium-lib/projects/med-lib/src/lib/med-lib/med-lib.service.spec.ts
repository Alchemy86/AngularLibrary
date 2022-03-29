import { TestBed } from '@angular/core/testing';

import { MedLibService } from './med-lib.service';

describe('MedLibService', () => {
  let service: MedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
