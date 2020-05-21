import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LargeDeviceErrorComponent } from './large-device-error/large-device-error.component';

@NgModule({
  declarations: [NavbarComponent, LargeDeviceErrorComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [NavbarComponent, FontAwesomeModule, LargeDeviceErrorComponent]
})
export class SharedModule {}
