import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { Tontinard, TontinardInfo } from '../models/tontinard';

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
    return of(this.requestedServer("login")).pipe(
      delay(2000),
      tap(() => this.isLoggedIn = true)
    );
  }


  private requestedServer(fakeMessage: string): boolean {
    console.log(fakeMessage + " ##   ");
    // fake it
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  registry(credentials: Tontinard): Observable<boolean> {
    // TODO@GHZE: should post request to server to add new user
    return of(this.requestedServer("registry"))
      .pipe(delay(50000),
        tap(() => this.isLoggedIn = true));

  }
}
