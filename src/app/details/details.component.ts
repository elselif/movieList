import { Component, OnInit } from '@angular/core';
import { Movie } from '../Model/movie';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { Router } from '@angular/router';
import { Cast , CreditsResponse} from '../Model/Credits';
import { DetailsResponse,Genre } from '../Model/Detail';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  filmArray : any;
  filmGenreArray : Genre[] = [];
  showSpinner: boolean = false;
  filmTopCast : Cast[] = [];


  constructor( private apiService : MovieApiServiceService,private router: ActivatedRoute) { }

  ngOnInit(): void {
let getParamId = this.router.snapshot.paramMap.get('id');
console.log(getParamId,'getparamid#');

this.getMovie(getParamId);
this.getMovieCredit(getParamId);
  }

  getMovie(id:any)
  {
    this.showSpinner = true;
    this.apiService.getMovieDetail(id).subscribe((result) => {
      this.filmArray = result;
      this.filmGenreArray = result.genres;
      this.showSpinner = false;
      console.log(result,'getmoviedetails')
    })
  }

  getMovieCredit(id:any)
  {
    this.showSpinner = true;
    this.apiService.getMovieCredits(id).subscribe((result) => {
      this.filmTopCast = result.cast;
      this.showSpinner = false;
      console.log(result, 'getMovieCredit')

    })
  }
}
