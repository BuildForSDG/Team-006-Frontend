import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingResponseComponent } from './pending-response/pending-response.component';

const routes: Routes = [
  {
    path: '',
    component: PendingResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingResponseRoutingModule {}
