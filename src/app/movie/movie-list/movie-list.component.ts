import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : any;
  searchText : any;
  constructor(private http: HttpClient,
              private appservice : AppService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    if(this.appservice.movies)
      this.movies = this.appservice.movies;
    else{
     this.http
      .get("/assets/data/movies.json")
      .subscribe(data => {
        this.movies = data.movies;
        this.appservice.movies = this.movies;
        console.log(data);
      });
    }
  }

  filterList(){
    console.log(this.searchText);
    this.movies = this.appservice.movies.filter(movie => movie.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
  }
}
