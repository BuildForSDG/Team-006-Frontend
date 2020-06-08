import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterHistoryComponent } from './reporter-history/reporter-history.component';
import { ReporterHistoryDetailsComponent } from './reporter-history-details/reporter-history-details.component';

const routes: Routes = [
  { path: '', component: ReporterHistoryComponent },
  { path: ':report-id', component: ReporterHistoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporterHistoryRoutingModule {}
