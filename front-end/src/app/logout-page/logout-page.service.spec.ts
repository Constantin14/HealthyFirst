import { TestBed } from '@angular/core/testing';

import { LogoutPageService } from './logout-page.service';

describe('LogoutPageService', () => {
  let service: LogoutPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
