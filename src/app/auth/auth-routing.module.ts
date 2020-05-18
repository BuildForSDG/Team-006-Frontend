import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterLoginComponent } from './reporter/reporter-login/reporter-login.component';

const routes: Routes = [{ path: 'reporter-login', component: ReporterLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
