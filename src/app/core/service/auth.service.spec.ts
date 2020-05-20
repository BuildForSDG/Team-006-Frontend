import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';

const authState = {
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};
const mockRouterService = jasmine.createSpyObj(['navigate']);
const mockAngularFireAuth: any = {
  auth: jasmine.createSpyObj('auth', {
    signInAnonymously: Promise.resolve() /* reject({
      code: 'auth/operation-not-allowed'
    }) */
      .catch((error) => error),
    signInWithPopup: Promise.resolve().catch((error) => error),
    signOut: Promise.resolve().catch((error) => error)
  }),
  authState: of(authState)
};
describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        {
          provide: AuthService,
          useClass: AuthService
        } /* ,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        {
          provide: NgZone,
          useClass: class {
            run = jasmine.createSpy('run');
          }
        } */
      ]
    })
  );

  it('should be created', () => {
    let router: Router;
    let ngZone: NgZone;
    const service: AuthService = new AuthService(mockAngularFireAuth, router, ngZone);

    expect(service).toBeTruthy();
  });

  it('should call loginWithFacebook method', () => {
    let router: Router;
    let ngZone: NgZone;
    const service: AuthService = new AuthService(mockAngularFireAuth, router, ngZone);

    spyOn(service, 'loginWithFacebook');
    spyOn(service, 'initiateSignInWithRedirect');

    service.loginWithFacebook();
    service.initiateSignInWithRedirect(new auth.FacebookAuthProvider());

    expect(service.loginWithFacebook).toHaveBeenCalled();
    expect(service.initiateSignInWithRedirect).toHaveBeenCalled();
  });

  it('should call loginWithGoogle method', () => {
    let router: Router;
    let ngZone: NgZone;
    const service: AuthService = new AuthService(mockAngularFireAuth, router, ngZone);

    console.log(mockAngularFireAuth.auth);

    spyOn(service, 'loginWithGoogle');
    spyOn(service, 'initiateSignInWithRedirect');

    service.loginWithGoogle();
    service.initiateSignInWithRedirect(new auth.GoogleAuthProvider());

    expect(service.loginWithGoogle).toHaveBeenCalled();
    expect(service.initiateSignInWithRedirect).toHaveBeenCalled();
  });

  it('should call logout method', () => {
    let router: Router;
    let ngZone: NgZone;
    const service: AuthService = new AuthService(mockAngularFireAuth, router, ngZone);

    console.log(mockAngularFireAuth.auth);

    spyOn(service, 'logout');

    service.logout();

    expect(service.logout).toHaveBeenCalled();
  });
});
