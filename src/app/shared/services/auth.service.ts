import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

// REad: https://angular.io/guide/router-tutorial-toh#canactivatechild-guarding-child-routes

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {

    // TODO@GHZE: should send request to server ask for aut
    return of(this.requestedServer()).pipe(
      delay(2000),
      tap(() => this.isLoggedIn = true)
    );
  }
  requestedServer(): boolean {
    console.log("###########   " + this.redirectUrl);
    // fake it
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
