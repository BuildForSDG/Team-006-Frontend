import { TestBed } from '@angular/core/testing';

import { ScreenWidthService } from './screen-width.service';

describe('ScreenWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenWidthService = TestBed.get(ScreenWidthService);
    expect(service).toBeTruthy();
  });
});
