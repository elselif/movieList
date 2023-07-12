import { Component, OnInit } from '@angular/core';
import { Movie } from '../Model/movie';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  filmArray : any;

  constructor( private apiService : MovieApiServiceService,private router: ActivatedRoute) { }

  ngOnInit(): void {
let getParamId = this.router.snapshot.paramMap.get('id');
console.log(getParamId,'getparamid#');

this.getMovie(getParamId);
  }

  getMovie(id:any)
  {
    this.apiService.getMovieDetail(id).subscribe((result) => {
      this.filmArray = result;
      console.log(result,'getmoviedetails')
    })
  }
}
