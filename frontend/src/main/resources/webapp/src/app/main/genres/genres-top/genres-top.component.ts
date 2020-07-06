import {Component, OnInit} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {GenreService} from "../../../shared/services/genre.service";
import {Genre} from "../genre";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-genres-top',
  templateUrl: './genres-top.component.html',
  styleUrls: ['./genres-top.component.scss']
})
export class GenresTopComponent implements OnInit {

  genres: Observable<Genre[]>
  public TOP_N_BOOKS: number = 5

  constructor(private genreService: GenreService) {
  }

  ngOnInit() {
    this.genres = this.genreService.getGenres().pipe(
      map(value => {
        const genres: Genre[] = value.data
        for (const genre of genres) {
          genre.books = this.genreService.getGenreBooks(genre.genre_id).pipe(
            map(response => response.data),
            map(data => data.filter(book => book.avg_rating)),
            tap(x => x.sort((a, b) => a.avg_rating>b.avg_rating ? -1 : 1 )),
            map(books => books.slice(0, this.TOP_N_BOOKS))
          )
        }
        return genres
      })
    )
  }
}
