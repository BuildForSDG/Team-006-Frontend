import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingResponseRoutingModule } from './pending-response-routing.module';
import { PendingResponseComponent } from './pending-response/pending-response.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CancelReportComponent } from './cancel-report/cancel-report.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PendingResponseComponent, CancelReportComponent],
  imports: [CommonModule, PendingResponseRoutingModule, SharedModule, FontAwesomeModule]
})
export class PendingResponseModule {}
