import { TestBed } from '@angular/core/testing';

import { ReportHistoryService } from './report-history.service';

describe('ReportHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportHistoryService = TestBed.get(ReportHistoryService);
    expect(service).toBeTruthy();
  });
});
