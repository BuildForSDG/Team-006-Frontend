import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageButtonsComponent } from './landing-page-buttons/landing-page-buttons.component';


@NgModule({
  declarations: [LandingPageComponent, LandingPageButtonsComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
