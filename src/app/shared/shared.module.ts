import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LargeDeviceErrorComponent } from './large-device-error/large-device-error.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, LargeDeviceErrorComponent, LoadingPageComponent, BackButtonComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
  exports: [
    NavbarComponent,
    FontAwesomeModule,
    LargeDeviceErrorComponent,
    LoadingPageComponent,
    BackButtonComponent,
    FormsModule
  ]
})
export class SharedModule {}
