import { TestBed, inject } from '@angular/core/testing';

import { QuestionGeneratorService } from './question-generator.service';

describe('QuestionGeneratorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionGeneratorService]
    });
  });

  it('should ...', inject([QuestionGeneratorService], (service: QuestionGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
