import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from "./heroes.component";
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from "./shared/hero.service";

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  providers: [HeroService],
  declarations: [HeroesComponent, HeroListComponent, HeroDetailComponent]
})
export class HeroesModule { }
