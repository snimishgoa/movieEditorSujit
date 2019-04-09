import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie :any; 

  constructor(private route: ActivatedRoute,
              private appservice : AppService,
              private http: HttpClient,) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log("routeParams ==>", routeParams);
      this.getMovieDetails(routeParams.id);
    });
  }

  getMovieDetails(id){
    if(this.appservice.movies)
      this.movie = this.appservice.movies.find((movie)=>{ return movie.id == id})
    else{
      this.http
      .get("/assets/data/movies.json")
      .subscribe(data => {
        this.appservice.movies = data.movies;
        this.movie = this.appservice.movies.find((movie)=>{ return movie.id == id})
        console.log(data);
      });
    }
  }

}
