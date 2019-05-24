import { TestBed, inject } from '@angular/core/testing';

import { RequestsFeedbackService } from './requests-feedback.service';

describe('RequestsFeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsFeedbackService]
    });
  });

  it('should be created', inject([RequestsFeedbackService], (service: RequestsFeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
