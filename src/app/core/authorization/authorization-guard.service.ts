import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route }    from '@angular/router';

import { AuthorizationService } from "./authorization.service";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state);
    return this.checkLogin(state.url);
  }

  canLoad(route: Route) {
    console.log(route);
    return this.checkLogin('/' + route.path);
  }

  checkLogin(url: string): boolean {
    if (this.authorizationService.isLoggedIn === true) {
      return true;
    }
    this.authorizationService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
