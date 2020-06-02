import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportersDashboardComponent } from './reporters-dashboard/reporters-dashboard.component';
import { ReportConfirmationComponent } from './report-confirmation/report-confirmation.component';

const routes: Routes = [
  { path: 'dashboard', component: ReportersDashboardComponent },
  { path: 'confirmation', component: ReportConfirmationComponent },
  {
    path: 'pending-response',
    loadChildren: () => import('./pending-response/pending-response.module').then((m) => m.PendingResponseModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportersDashboardRoutingModule {}
