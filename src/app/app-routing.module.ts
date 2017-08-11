import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./core/login/login.component";
import { NotFoundComponent } from './core/not-found/not-found.component';

import { AuthorizationGuard } from "./core/authorization/authorization-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule', canLoad: [AuthorizationGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
