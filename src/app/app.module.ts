import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from "./app-routing.module";

import { AuthorizationService } from './shared/authorization/authorization.service';
import { AuthorizationGuard } from './shared/authorization/authorization-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [AuthorizationService, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
