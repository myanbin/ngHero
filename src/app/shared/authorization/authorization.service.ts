import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  isLoggedIn(): boolean {
    return true;
  }
}
