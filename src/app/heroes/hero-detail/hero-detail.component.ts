import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

import { HeroService } from "../shared/hero.service";

import 'rxjs/add/operator/switchMap';

import { Hero } from "../shared/hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit() {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

}
