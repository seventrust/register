import { TestBed, async, inject } from '@angular/core/testing';

import { GuardianGuard } from './guardian.guard';

describe('GuardianGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardianGuard]
    });
  });

  it('should ...', inject([GuardianGuard], (guard: GuardianGuard) => {
    expect(guard).toBeTruthy();
  }));
});
