import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { Genre } from '../Model/Genre';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  filmListArray : Genre[] = [];

  constructor(private apiService : MovieApiServiceService) { }

  ngOnInit(): void {
    this.getCategoriesMovie();
  }

  getCategoriesMovie()
  {
    this.apiService.getMovieList().subscribe((result)=> {
      this.filmListArray = result;
      console.log(result,'getmovielist')

    })
  }


}
