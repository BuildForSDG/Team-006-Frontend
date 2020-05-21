import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'report-dashboard',
    loadChildren: () =>
      import('./reporters-dashboard/reporters-dashboard.module').then((m) => m.ReportersDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
