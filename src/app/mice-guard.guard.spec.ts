import { TestBed } from '@angular/core/testing';

import { MiceGuardGuard } from './mice-guard.guard';

describe('MiceGuardGuard', () => {
  let guard: MiceGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiceGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
