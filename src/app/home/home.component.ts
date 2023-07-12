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


  options: MovieModel = {
    page: 1,
    total_pages: 20,
    results: [],
    total_results: 0
  }

  ngOnInit(): void {
this.getPopularMovie();
  }

  getPopularMovie()
  {
    this.apiService.getPopularMovies(this.options).subscribe(
      (response) => {
        this.filmArray = response.results;
        console.log(this.filmArray)
      }
   )
  }

  size(size:number)
  {
    this.options.page = 1;
    this.getPopularMovie();

  }

  next()
  {
    this.options.page++;
    this.getPopularMovie();
  }

  prev()
  {
    this.options.page--;
    this.getPopularMovie();
  }





}
