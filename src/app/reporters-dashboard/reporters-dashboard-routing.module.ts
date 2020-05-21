import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportersDashboardComponent } from './reporters-dashboard.component';

const routes: Routes = [{ path: '', component: ReportersDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportersDashboardRoutingModule {}
