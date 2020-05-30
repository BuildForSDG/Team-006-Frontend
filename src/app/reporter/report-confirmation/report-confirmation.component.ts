import { Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { ReportService } from 'src/app/core/service/report.service';

@Component({
  selector: 'app-report-confirmation',
  templateUrl: './report-confirmation.component.html',
  styleUrls: ['./report-confirmation.component.scss']
})
export class ReportConfirmationComponent implements OnInit {
  constructor(public screenWidthService: ScreenWidthService, public reportService: ReportService) {}

  ngOnInit() {}
}
