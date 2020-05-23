import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-reporter-auth-buttons',
  templateUrl: './reporter-auth-buttons.component.html',
  styleUrls: ['./reporter-auth-buttons.component.scss']
})
export class ReporterAuthButtonsComponent implements OnInit {
  @Input() buttonUse: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
