import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterLoginComponent } from './reporter/reporter-login/reporter-login.component';
import { ReporterSignupComponent } from './reporter/reporter-signin/reporter-signup.component';
import { ProfileConfirmationComponent } from './reporter/reporter-signin/profile-confirmation/profile-confirmation.component';

const routes: Routes = [
  { path: 'reporter-login', component: ReporterLoginComponent },
  { path: 'reporter-signup', component: ReporterSignupComponent },
  { path: 'reporter-signup/profile-confirmation', component: ProfileConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
