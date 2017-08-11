import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from "../authorization/authorization.service";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  title: string = '梁山英雄管理中心';

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
  }

}
