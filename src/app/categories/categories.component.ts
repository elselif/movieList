import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { GenreResponse } from '../Model/Genre';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  filmListArray: GenreResponse = { genres: [] };

  constructor(private apiService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.getCategoriesMovie();
  }

  getCategoriesMovie() {
    this.apiService.getMovieList().subscribe((result) => {
      this.filmListArray = result;
      console.log(result, 'getmovielist');
    });
  }

  test(id: number) {
    console.log(id);
  }
}
