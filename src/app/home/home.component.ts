import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiInterceptorInterceptor } from '../api/api-interceptor.interceptor';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie, MovieModel } from '../Model/movie';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseUrl = "https://api.themoviedb.org/3";
  filmArray : Movie[] = [];

  constructor(private http:HttpClient, private apiService : MovieApiServiceService) { }



  ngOnInit(): void {
this.getPopularMovie();
  }

  getPopularMovie()
  {
    this.apiService.getPopularMovies().subscribe(
      (response) => {
        this.filmArray = response.results;
        console.log(this.filmArray)
      }
   )
  }

  popularMovie(): void
  {


    this.http
      .get<MovieModel>(this.baseUrl + '/movie/popular')
      .subscribe((response :MovieModel) => {
        this.filmArray = response.results;
        console.log(this.filmArray)
      });
  }

}
