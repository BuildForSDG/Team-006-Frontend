import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReporterLoginComponent } from './reporter/reporter-login/reporter-login.component';
import { ReporterSignupComponent } from './reporter/reporter-signin/reporter-signup.component';
import { SharedModule } from '../shared/shared.module';
import { ReporterAuthButtonsComponent } from './reporter/reporter-auth-buttons/reporter-auth-buttons.component';
import { ProfileConfirmationComponent } from './reporter/reporter-signin/profile-confirmation/profile-confirmation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReporterLoginComponent,
    ReporterSignupComponent,
    ReporterAuthButtonsComponent,
    ProfileConfirmationComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule]
})
export class AuthModule {}
