import { TestBed } from '@angular/core/testing';

import { StarwarsfbService } from './starwarsfb.service';

describe('StarwarsfbService', () => {
  let service: StarwarsfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
