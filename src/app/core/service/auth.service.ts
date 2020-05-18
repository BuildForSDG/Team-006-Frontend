import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public angularFireAuth: AngularFireAuth, // Inject AngularFireAuth
    private router: Router,
    private ngZone: NgZone
  ) {}

  loginWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth.auth.signInWithPopup(provider).then((res) => {
        resolve(res);
        this.ngZone.run(() => {
          this.router.navigate(['/report-dashboard']);
        });
      });
    });
  }

  loginWithFacebook() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.FacebookAuthProvider();
      this.angularFireAuth.auth.signInWithPopup(provider).then(
        (res) => {
          resolve(res);
          this.ngZone.run(() => {
            this.router.navigate(['/report-dashboard']);
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  logout() {
    this.angularFireAuth.auth
      .signOut()
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(['/reporter-login']);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
