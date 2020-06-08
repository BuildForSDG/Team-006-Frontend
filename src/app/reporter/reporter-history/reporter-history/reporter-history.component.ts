import { Component, OnInit } from '@angular/core';
import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reporter-history',
  templateUrl: './reporter-history.component.html',
  styleUrls: ['./reporter-history.component.scss']
})
export class ReporterHistoryComponent implements OnInit {
  // icon
  faMapPin = faMapPin;
  faClock = faClock;

  constructor() {}

  ngOnInit() {}
}
