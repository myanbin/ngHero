import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from "./heroes.component";
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroesRoutingModule } from "./heroes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  declarations: [HeroesComponent, HeroListComponent]
})
export class HeroesModule { }
