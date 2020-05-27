import { Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-confirmation',
  templateUrl: './profile-confirmation.component.html',
  styleUrls: ['./profile-confirmation.component.scss']
})
export class ProfileConfirmationComponent implements OnInit {
  constructor(public screenWidthService: ScreenWidthService, public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  submitForm(formValue) {
    this.authService.setReporterLoggedInStatus();
    this.router.navigate(['/report-dashboard']);
  }
}
