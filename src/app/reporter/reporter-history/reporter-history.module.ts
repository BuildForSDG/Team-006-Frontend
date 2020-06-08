import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporterHistoryRoutingModule } from './reporter-history-routing.module';
import { ReporterHistoryComponent } from './reporter-history/reporter-history.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReporterHistoryComponent],
  imports: [CommonModule, ReporterHistoryRoutingModule, SharedModule]
})
export class ReporterHistoryModule {}
