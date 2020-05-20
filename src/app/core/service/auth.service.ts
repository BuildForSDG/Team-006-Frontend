import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInMessage = 'Loading...';
  signInPendingState: boolean;
  constructor(
    public angularFireAuth: AngularFireAuth, // Inject AngularFireAuth
    private router: Router,
    private ngZone: NgZone
  ) {
    // Using sessionstorage as a means to show a loading message before the getRedirectResult method resolves
    if (window.sessionStorage.getItem('period')) {
      this.showSignInPendingMessage();
      window.sessionStorage.removeItem('period');
      this.angularFireAuth.auth
        .getRedirectResult()
        .then((result) => {
          if (result.user) {
            // Using NgZone as the only way to run Angular-specific code within Promise
            this.ngZone.run(() => {
              this.signInPendingState = false;
              this.router.navigate(['/report-dashboard']);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  loginWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

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
    const user = this.angularFireAuth.auth.currentUser;
    this.angularFireAuth.auth
      .signOut()
      .then(() => {
        this.angularFireAuth.auth.onAuthStateChanged((user) => {
          this.router.navigate(['/reporter-login']);
        });
        /* this.ngZone.run(() => {
          this.router.navigate(['/reporter-login']);
        }); */
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
}
