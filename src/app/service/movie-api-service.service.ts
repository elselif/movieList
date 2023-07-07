import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(
    private http:HttpClient
  ) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey =  '994b274459543a5ad12662a2f287a163';

  //bannerapidata

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }


  // trendingmoviesapidata

  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/movie/day?/api_key=${this.apikey}`);
  }


}
