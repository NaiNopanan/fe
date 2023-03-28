import { TestBed } from '@angular/core/testing';

import { OnlineSubsystemService } from './online-subsystem.service';

describe('OnlineSubsystemService', () => {
  let service: OnlineSubsystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineSubsystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
