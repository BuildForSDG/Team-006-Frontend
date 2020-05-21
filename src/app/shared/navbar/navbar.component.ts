import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /* icon property */
  faBars = faBars;

  sideMenu = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  /* Hide side menu */
  closeMenu() {
    this.sideMenu = !this.sideMenu;
  }

  /* Show side menu */
  showMenu() {
    this.sideMenu = !this.sideMenu;
  }

  /* Log reporter out of app  */
  logout() {
    this.authService.logout();
  }
}
