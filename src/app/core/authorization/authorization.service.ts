import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorizationService {

  constructor() { }

  isLoggedIn: boolean = false;

  redirectUrl: string;

  authorize(username: string, password: string): Promise<boolean> {
    if (username === 'admin') {
      this.isLoggedIn = true;
    }
    return Promise.resolve(this.isLoggedIn);
  }
}
