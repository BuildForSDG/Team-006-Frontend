import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReporterLoginComponent } from './reporter/reporter-login/reporter-login.component';
import { ReporterSigninComponent } from './reporter/reporter-signin/reporter-signin.component';


@NgModule({
  declarations: [ReporterLoginComponent, ReporterSigninComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
