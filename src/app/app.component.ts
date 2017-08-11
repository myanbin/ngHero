import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('梁山英雄管理中心');
  }

}
