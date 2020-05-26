import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IReporterProfileConfirmation } from '../interface/profile-confirmation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInMessage = 'Loading...';
  signInPendingState: boolean;
  reporterIsLoggedIn: boolean;
  newReporterProfile: IReporterProfileConfirmation = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0
  };

  constructor(
    public angularFireAuth: AngularFireAuth, // Inject AngularFireAuth
    private router: Router,
    private ngZone: NgZone
  ) {
    if (window.sessionStorage.getItem('token')) {
      this.setReporterLoggedInStatus();
    }
    // Using sessionstorage as a means to show a loading message before the getRedirectResult method resolves
    if (window.sessionStorage.getItem('period')) {
      this.showSignInPendingMessage();
      window.sessionStorage.removeItem('period');
      this.angularFireAuth.auth
        .getRedirectResult()
        .then((result) => {
          this.ngZone.run(() => {
            this.signInPendingState = false;
          });

          if (result.user) {
            // Using NgZone as the only way to run Angular-specific code within Promise
            this.ngZone.run(() => {
              if (result.additionalUserInfo.isNewUser) {
                // tslint:disable-next-line: no-string-literal
                this.newReporterProfile.email = result.additionalUserInfo.profile['email'];
                // tslint:disable-next-line: no-string-literal
                this.newReporterProfile.firstName = result.additionalUserInfo.profile['given_name'];
                // tslint:disable-next-line: no-string-literal
                this.newReporterProfile.lastName = result.additionalUserInfo.profile['family_name'];

                this.router.navigate(['/auth/reporter-signup/profile-confirmation']);
              } else {
                this.setReporterLoggedInStatus();
                window.sessionStorage.setItem('token', result.credential.providerId);
                this.router.navigate(['/report/dashboard']);
              }
            });
          }
        })
        .catch((err) => {
          this.ngZone.run(() => {
            this.signInPendingState = false;
          });
          console.log(err);
        });
    }
  }

  loginWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();

      // Initiate signInWithRedirect method
      this.initiateSignInWithRedirect(provider);
      resolve();
    });
  }

  loginWithFacebook() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.FacebookAuthProvider();
      // Initiate signInWithRedirect method
      this.initiateSignInWithRedirect(provider);
      resolve();
    });
  }

  logout() {
    this.angularFireAuth.auth
      .signOut()
      .then(() => {
        if (window.sessionStorage.getItem('token')) {
          window.sessionStorage.removeItem('token');
        }
        if (window.sessionStorage.getItem('incidentComment')) {
          window.sessionStorage.removeItem('incidentComment');
        }
        if (window.sessionStorage.getItem('selectedTags')) {
          window.sessionStorage.removeItem('selectedTags');
        }
        this.reporterIsLoggedIn = false;
        this.router.navigate(['/reporter-login']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showSignInPendingMessage() {
    // if this.signInPendingState === true, sign in message would be displayed;
    this.signInPendingState = true;
  }

  initiateSignInWithRedirect(provider) {
    /**
     * Setting sessionstorage which would be used to enable the system know that the user has initiated a signInWithRedirect method.
     * We do this because after the user returns to the login page of the app after redirecting to the social auth page,
     * we have no way of knowing that a getRedirectResult method is pending.
     *
     */
    window.sessionStorage.setItem('period', '1');
    this.angularFireAuth.auth.signInWithRedirect(provider);
  }

  setReporterLoggedInStatus() {
    this.reporterIsLoggedIn = true;
  }
}
