import { Component, NgModule } from '@angular/core';
import { Genre, GenreResponse } from './Model/Genre';
import { MovieApiServiceService } from './service/movie-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fillle';
  categories: Genre[] = [];

  constructor(private apiService: MovieApiServiceService) {}

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
