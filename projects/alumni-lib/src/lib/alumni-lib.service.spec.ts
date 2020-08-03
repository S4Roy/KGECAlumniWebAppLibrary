import { TestBed } from '@angular/core/testing';

import { AlumniLibService } from './alumni-lib.service';

describe('AlumniLibService', () => {
  let service: AlumniLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
