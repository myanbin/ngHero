import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

import { AuthorizationService } from "./authorization.service";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin(state.url);
  }

  canLoad() {
    return this.checkLogin();
  }

  checkLogin(url?: string): boolean {
    if (this.authorizationService.isLoggedIn) {
      return true;
    }
    this.authorizationService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
