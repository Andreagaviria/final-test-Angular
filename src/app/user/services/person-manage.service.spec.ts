import { TestBed } from '@angular/core/testing';

import { PersonManageService } from './person-manage.service';

describe('PersonManageService', () => {
  let service: PersonManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
