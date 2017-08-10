import { Component, OnInit } from '@angular/core';

import { flyInOut } from "../animations";

@Component({
  selector: 'app-heroes',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  animations: [flyInOut]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
