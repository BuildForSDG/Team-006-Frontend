import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportHistoryService } from 'src/app/core/service/report-history.service';

@Component({
  selector: 'app-reporter-history-details',
  templateUrl: './reporter-history-details.component.html',
  styleUrls: ['./reporter-history-details.component.scss']
})
export class ReporterHistoryDetailsComponent implements OnInit {
  report;

  constructor(private activatedRoute: ActivatedRoute, private reportHistoryService: ReportHistoryService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      const params = +param['report-id'];

      this.report = this.reportHistoryService.getSingleReportHistory(params);
    });
  }
}
