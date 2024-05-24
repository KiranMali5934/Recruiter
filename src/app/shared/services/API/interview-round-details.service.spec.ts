import { TestBed } from '@angular/core/testing';

import { InterviewRoundDetailsService } from './interview-round-details.service';

describe('InterviewRoundDetailsService', () => {
  let service: InterviewRoundDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewRoundDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
