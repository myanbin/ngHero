import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad }    from '@angular/router';

import { AuthorizationService } from "./authorization.service";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  canActivate() {
    return this.checkLogin();
  }

  canLoad() {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authorizationService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
