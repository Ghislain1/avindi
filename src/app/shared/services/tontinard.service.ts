import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tontinard } from '../models/tontinard';
import { ApiService } from './api.service';
// https://angular.io/tutorial/toh-pt6  see   HeroService

@Injectable({
  providedIn: 'root'
})
export class TontinardService {
  private tontinardUrl = 'api/articles';  // URL to web api
  private demoUrl = environment.api_url_mns237;
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  save(tontinard: Tontinard): Observable<Tontinard> {
    // If we're updating an existing tontinard
    if (tontinard.existAlready) {
      return this.apiService.put('/tontinards/' + tontinard.existAlready, { tontinard: tontinard })
        .pipe(map(data => data.tontinard));
      // Otherwise, create a new tontinard
    } else {
      return this.apiService.post('/tontinards/', { tontinard: tontinard })
        .pipe(
          delay(1000),
          map(data => data.tontinard));
    }
  }

  getBlogs() {
    return this.apiService.get(this.tontinardUrl);
  }
  /** GET: Demo from server */
  getDemo(): Observable<any[]> {
    const url = `${this.demoUrl}/blogs`;
    return this.httpClient.get<any[]>(url).pipe(
      tap(_ => console.log('fetched Demo ')),
      catchError(this.handleError<any[]>('getDemo()', []))
    );
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO@Idrice: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO@Idrice: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
