import { TestBed } from '@angular/core/testing';

import { WeekDatesService } from './week-dates.service';

describe('WeekDatesService', () => {
  let service: WeekDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
