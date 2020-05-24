import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportersDashboardRoutingModule } from './reporters-routing.module';
import { ReportersDashboardComponent } from './reporters-dashboard/reporters-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReportersDashboardComponent],
  imports: [CommonModule, ReportersDashboardRoutingModule, SharedModule, FormsModule]
})
export class ReportersDashboardModule {}
