import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporterHistoryRoutingModule } from './reporter-history-routing.module';
import { ReporterHistoryComponent } from './reporter-history/reporter-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReporterHistoryDetailsComponent } from './reporter-history-details/reporter-history-details.component';

@NgModule({
  declarations: [ReporterHistoryComponent, ReporterHistoryDetailsComponent],
  imports: [CommonModule, ReporterHistoryRoutingModule, SharedModule]
})
export class ReporterHistoryModule {}
