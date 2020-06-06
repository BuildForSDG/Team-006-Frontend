import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-buttons',
  templateUrl: './landing-page-buttons.component.html',
  styleUrls: ['./landing-page-buttons.component.scss']
})
export class LandingPageButtonsComponent implements OnInit {
  @Input()
  giveRedBorder: boolean;

  constructor() {}

  ngOnInit() {}
}
