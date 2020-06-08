import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterHistoryComponent } from './reporter-history/reporter-history.component';

const routes: Routes = [{ path: '', component: ReporterHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporterHistoryRoutingModule {}
