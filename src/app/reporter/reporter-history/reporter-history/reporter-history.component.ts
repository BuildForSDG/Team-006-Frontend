import { Component, OnInit } from '@angular/core';
import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import { ReportHistoryService } from 'src/app/core/service/report-history.service';

@Component({
  selector: 'app-reporter-history',
  templateUrl: './reporter-history.component.html',
  styleUrls: ['./reporter-history.component.scss']
})
export class ReporterHistoryComponent implements OnInit {
  // icon
  faMapPin = faMapPin;
  faClock = faClock;

  reportHistory;

  constructor(private reportHistoryService: ReportHistoryService) {}

  ngOnInit() {
    this.reportHistoryService.getReportHistory().subscribe((res) => {
      this.reportHistory = res;
    });
  }
}
