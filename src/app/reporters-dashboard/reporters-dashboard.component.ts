import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporters-dashboard',
  templateUrl: './reporters-dashboard.component.html',
  styleUrls: ['./reporters-dashboard.component.scss']
})
export class ReportersDashboardComponent implements OnInit {
  sideMenu = false;

  constructor() {}

  ngOnInit() {}

  /* Hide side menu */
  closeMenu() {
    this.sideMenu = !this.sideMenu;
  }

  /* Show side menu */
  showMenu() {
    this.sideMenu = !this.sideMenu;
  }
}
