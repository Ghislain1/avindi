import { TestBed } from '@angular/core/testing';

import { TontinardService } from './tontinard.service';

describe('TontinardService', () => {
  let service: TontinardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TontinardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
