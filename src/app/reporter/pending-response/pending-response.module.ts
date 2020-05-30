import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingResponseRoutingModule } from './pending-response-routing.module';
import { PendingResponseComponent } from './pending-response/pending-response.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PendingResponseComponent],
  imports: [CommonModule, PendingResponseRoutingModule, SharedModule]
})
export class PendingResponseModule {}
