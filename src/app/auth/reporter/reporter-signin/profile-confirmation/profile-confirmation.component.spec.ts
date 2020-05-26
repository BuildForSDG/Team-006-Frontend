import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConfirmationComponent } from './profile-confirmation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

const authState = {
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

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

describe('ProfileConfirmationComponent', () => {
  let component: ProfileConfirmationComponent;
  let fixture: ComponentFixture<ProfileConfirmationComponent>;
  const mockAuthService = jasmine.createSpyObj(['logout', 'loginWithGoogle', 'loginWithFacebook']);
  const mockScreenWidthService = jasmine.createSpyObj(['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileConfirmationComponent],
      imports: [SharedModule, FormsModule, RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ScreenWidthService, useValue: mockScreenWidthService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // tslint:disable-next-line: prefer-const
    let router: Router;
    const screenWidth: ScreenWidthService = undefined;
    fixture = TestBed.createComponent(ProfileConfirmationComponent);
    // component = new ProfileConfirmationComponent(screenWidth, mockAuthService, router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
