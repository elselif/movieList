import { Component, NgModule, OnInit } from '@angular/core';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { GenreResponse, Genre } from './Model/Genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fillle';
  categories: Genre[] = [];
  constructor(private readonly apiService: MovieApiServiceService) {}
  ngOnInit(): void {
    this.getCategoriesMovie();
  }
  getCategoriesMovie() {
    this.apiService.getMovieList().subscribe((result: GenreResponse) => {
      this.categories = result.genres;
    });
  }
  transferData(genreId: number) {
    this.apiService.genreId.next(genreId);
  }
}
