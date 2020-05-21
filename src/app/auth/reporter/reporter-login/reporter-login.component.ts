import { Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-reporter-login',
  templateUrl: './reporter-login.component.html',
  styleUrls: ['./reporter-login.component.scss']
})
export class ReporterLoginComponent implements OnInit {
  constructor(public screenWidthService: ScreenWidthService, public authService: AuthService) {}

  ngOnInit() {}
}
