import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { UserStoreService } from './user-store.service';

describe('UserStoreService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
    });
    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
