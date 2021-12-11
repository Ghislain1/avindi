import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // <==== due to  error in CI
      providers: [],
      declarations: [],
    });
    guard = TestBed.inject(AuthGuard);
  });



  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
