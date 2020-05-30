import { Component, OnInit, Input } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  /* Icon */
  faChevronLeft = faChevronLeft;

  @Input()
  routeLink: string;

  constructor() { }

  ngOnInit() {
  }

}
