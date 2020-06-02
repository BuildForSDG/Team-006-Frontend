import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingResponseComponent } from './pending-response/pending-response.component';
import { CancelReportComponent } from './cancel-report/cancel-report.component';

const routes: Routes = [
  {
    path: '',
    component: PendingResponseComponent
  },
  {
    path: 'cancel-report',
    component: CancelReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingResponseRoutingModule {}
