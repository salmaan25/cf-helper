import { TestBed } from '@angular/core/testing';

import { CfHelperService } from './cf-helper.service';

describe('CfHelperService', () => {
  let service: CfHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
