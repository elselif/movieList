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

  currentPage = 1;
  filmArray : Movie[] = [];
  showSpinner: boolean = false;
  constructor(private http:HttpClient, private apiService : MovieApiServiceService) { }


  options: MovieModel = {
    page: 1,
    total_pages: 20,
    results: [],
    total_results: 0
  }

  ngOnInit(): void {
this.getPopularMovie(this.currentPage);
  }

  getPopularMovie(pageNumber:number)
  {
    this.showSpinner = true;
    this.apiService.getPopularMovies(pageNumber).subscribe(
      (response) => {
        this.filmArray = response.results;
        this.currentPage = pageNumber;
        this.showSpinner = false;
        console.log(this.filmArray)
      }
   )
  }







}
