import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Tontinard } from '../models/tontinard';
import { ApiService } from './api.service';
// https://angular.io/tutorial/toh-pt6  see   HeroService

@Injectable({
  providedIn: 'root'
})
export class TontinardService {
  private tontinardUrl = 'api/articles';  // URL to web api

  constructor(private apiService: ApiService) { }

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


}
