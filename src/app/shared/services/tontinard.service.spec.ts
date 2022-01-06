import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TontinardService } from './tontinard.service';

describe('TontinardService', () => {
  let service: TontinardService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TontinardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
