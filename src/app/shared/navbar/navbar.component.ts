import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
