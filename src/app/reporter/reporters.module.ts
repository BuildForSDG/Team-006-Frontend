import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportersDashboardRoutingModule } from './reporters-routing.module';
import { ReportersDashboardComponent } from './reporters-dashboard/reporters-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ReportConfirmationComponent } from './report-confirmation/report-confirmation.component';
import { PendingResponseModule } from './pending-response/pending-response.module';
import { ReporterHistoryModule } from './reporter-history/reporter-history.module';

@NgModule({
  declarations: [ReportersDashboardComponent, ReportConfirmationComponent],
  imports: [
    CommonModule,
    ReportersDashboardRoutingModule,
    SharedModule,
    FormsModule,
    PendingResponseModule,
    ReporterHistoryModule
  ]
})
export class ReportersDashboardModule {}
