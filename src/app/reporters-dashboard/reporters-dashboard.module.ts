import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportersDashboardRoutingModule } from './reporters-dashboard-routing.module';
import { ReportersDashboardComponent } from './reporters-dashboard.component';


@NgModule({
  declarations: [ReportersDashboardComponent],
  imports: [
    CommonModule,
    ReportersDashboardRoutingModule
  ]
})
export class ReportersDashboardModule { }
