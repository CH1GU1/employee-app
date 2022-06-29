import { TestBed } from '@angular/core/testing';

import { DataEmployeesServiceService } from './data-employees-service.service';

describe('DataEmployeesServiceService', () => {
  let service: DataEmployeesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEmployeesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
