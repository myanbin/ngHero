import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NavigateComponent } from './navigate/navigate.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavigateComponent],
  declarations: [NavigateComponent, LoginComponent, NotFoundComponent]
})
export class CoreModule { }
