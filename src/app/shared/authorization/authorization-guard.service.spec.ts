import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AuthorizationGuard } from './authorization-guard.service';
import { AuthorizationService } from './authorization.service';

describe('AuthorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthorizationGuard, AuthorizationService]
    });
  });

  it('should be created', inject([AuthorizationGuard], (service: AuthorizationGuard) => {
    expect(service).toBeTruthy();
  }));
});
