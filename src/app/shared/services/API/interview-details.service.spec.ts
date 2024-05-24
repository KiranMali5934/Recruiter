import { TestBed } from '@angular/core/testing';

import { InterviewDetailsService } from './interview-details.service';

describe('InterviewDetailsService', () => {
  let service: InterviewDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
