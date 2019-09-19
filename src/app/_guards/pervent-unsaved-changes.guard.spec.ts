import { TestBed, async, inject } from '@angular/core/testing';

import { PerventUnsavedChangesGuard } from './pervent-unsaved-changes.guard';

describe('PerventUnsavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerventUnsavedChangesGuard]
    });
  });

  it('should ...', inject([PerventUnsavedChangesGuard], (guard: PerventUnsavedChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
