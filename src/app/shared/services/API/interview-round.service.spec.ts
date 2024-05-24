import { TestBed } from '@angular/core/testing';

import { InterviewRoundService } from './interview-round.service';

describe('InterviewRoundService', () => {
  let service: InterviewRoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewRoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
