import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthorizationService } from "../authorization/authorization.service";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  title: string = '梁山英雄管理中心';

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) { }

  ngOnInit() {
  }

  logout() {
    console.log('logouting ...');
    this.authorizationService.signout().then(logStatus => {
      if (logStatus === false) {
        console.log('logout success');
        this.router.navigate(['/login']);
      }
    })
  }
}
