import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorizationService {

  constructor() { }

  isLoggedIn: boolean = false;

  redirectUrl: string;

  signin(username: string, password: string): Promise<boolean> {
    if (username === 'admin') {
      this.isLoggedIn = true;
    }
    return Promise.resolve(this.isLoggedIn);
  }

  signout(): Promise<boolean> {
    this.isLoggedIn = false;
    return Promise.resolve(this.isLoggedIn);
  }
}
