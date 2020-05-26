import { Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-reporter-signup',
  templateUrl: './reporter-signup.component.html',
  styleUrls: ['./reporter-signup.component.scss']
})
export class ReporterSignupComponent implements OnInit {
  constructor(public screenWidthService: ScreenWidthService, public authService: AuthService) {}

  ngOnInit() {}
}
