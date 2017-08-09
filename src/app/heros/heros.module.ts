import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosComponent } from "./heros.component";
import { HerosListComponent } from './heros-list/heros-list.component';

import { HerosRoutingModule } from "./heros-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HerosRoutingModule,
  ],
  declarations: [HerosComponent, HerosListComponent]
})
export class HerosModule { }
