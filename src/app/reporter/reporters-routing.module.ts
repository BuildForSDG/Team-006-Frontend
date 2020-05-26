import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportersDashboardComponent } from './reporters-dashboard/reporters-dashboard.component';
import { ReportConfirmationComponent } from './report-confirmation/report-confirmation.component';

const routes: Routes = [
  { path: 'dashboard', component: ReportersDashboardComponent },
  { path: 'confirmation', component: ReportConfirmationComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportersDashboardRoutingModule {}
