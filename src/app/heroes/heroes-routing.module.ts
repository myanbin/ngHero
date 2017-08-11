import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { AuthorizationGuard } from "../core/authorization/authorization-guard.service";

const routes: Routes = [
  { path: '', component: HeroListComponent, canActivate: [AuthorizationGuard] },
  { path: ':id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }