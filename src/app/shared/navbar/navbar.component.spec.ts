import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Menu Control', () => {
    it('should set sideMenu property to truthy', () => {
      component.showMenu();

      expect(component.sideMenu).toBeTruthy();
    });

    it('should set sideMenu property to falsy', () => {
      component.sideMenu = false;
      component.sideMenu = !component.sideMenu;

      component.closeMenu();

      expect(component.sideMenu).toBeFalsy();
    });
  });
});
