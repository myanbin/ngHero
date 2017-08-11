import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthorizationService } from "../authorization/authorization.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private router: Router,
    private titleService: Title,
    private authorizationService: AuthorizationService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('登录');
    if (this.authorizationService.isLoggedIn === true) {
      this.router.navigate(['/']);
    }
  }

  handleSubmit() {

    this.authorizationService.signin(this.username, this.password).then(logStatus => {
      if (logStatus === true) {
        const redirect = this.authorizationService.redirectUrl ? this.authorizationService.redirectUrl : '/';
        this.router.navigate([redirect]);
      } else {
        console.log('login failed');
      }
    });
    
  }
}
