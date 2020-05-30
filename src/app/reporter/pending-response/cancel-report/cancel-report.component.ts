import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-report',
  templateUrl: './cancel-report.component.html',
  styleUrls: ['./cancel-report.component.scss']
})
export class CancelReportComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submit(form) {
    console.log(form.value);
  }
}
