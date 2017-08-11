import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavigateComponent } from './navigate/navigate.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthorizationService } from './authorization/authorization.service';
import { AuthorizationGuard } from './authorization/authorization-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [NavigateComponent],
  providers: [AuthorizationService, AuthorizationGuard],
  declarations: [NavigateComponent, LoginComponent, NotFoundComponent]
})
export class CoreModule {

  static forRoot():ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }

}
