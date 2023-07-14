import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieModel } from '../Model/movie';
import { GenreResponse } from '../Model/Genre';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  baseurl = 'https://api.themoviedb.org/3';
  genreId: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}

  //bannerapidata

  getPopularMovies(pageNumber: number, genreId?: number): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movie/popular`, {
      params: {
        page: pageNumber,
        with_genres: genreId ?? '',
      },
    });
  }

  getMovieDetail(data: any): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movie/${data}`);
  }

  getMovieList(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${this.baseurl}/genre/movie/list`);
  }
}
