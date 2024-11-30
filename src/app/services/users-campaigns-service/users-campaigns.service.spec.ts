import { TestBed } from '@angular/core/testing';

import { UsersCampaignsService } from './users-campaigns.service';

describe('UsersCampaignsService', () => {
  let service: UsersCampaignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCampaignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
