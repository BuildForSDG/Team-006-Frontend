import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgZone } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  const mockAuthService = jasmine.createSpyObj(['logout', 'loginWithGoogle', 'loginWithFacebook']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [FontAwesomeModule],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
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
