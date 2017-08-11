import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private authorizationService: AuthorizationService,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log('logining:', this.username, this.password);

    this.authorizationService.authorize(this.username, this.password).then(isLoggedIn => {
      if (isLoggedIn === true) {
        let redirect = this.authorizationService.redirectUrl ? this.authorizationService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      } else {
        console.log('login failed');
      }
    });
    
  }
}
