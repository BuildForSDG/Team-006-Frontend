import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /* icon property */
  faBars = faBars;

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
