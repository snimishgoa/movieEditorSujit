import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie : any = {
    title : '',
    rating : '',
    genre: '',
    year: '',
    id : ''
  }
  constructor(private appservice : AppService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("onSubmit ==>", this.movie)
    this.movie.id = this.appservice.movies.length+1;
    this.appservice.movies.unshift(this.movie);
    this.router.navigate(['']);
    console.log(this.appservice.movies);
  }

}
