import {Component, OnInit} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {GenreBookService} from "../../../shared/services/genre-book.service";
import {Genre} from "../genre";
import {map} from "rxjs/operators";
import {Book} from "../../books/book";

@Component({
  selector: 'app-genres-top',
  templateUrl: './genres-top.component.html',
  styleUrls: ['./genres-top.component.scss']
})
export class GenresTopComponent implements OnInit {

  genres: Observable<Genre[]>

  books: Observable<Book[]>

  constructor(private genreBookService: GenreBookService) {
  }

  ngOnInit() {
    this.books= this.genreBookService.getGenreBooks(1).pipe(
      map(value => value.data)
    )
    this.genres = this.genreBookService.getGenres().pipe(
      map(value => {
        const genres: Genre[] = value.data
        for (const genre of genres) {
          genre.books = this.genreBookService.getGenreBooks(genre.genre_id).pipe(
            map(value => value.data)
          )
        }
        return genres
      })
    )
  }

  getGenreBooks(number: number) {
    return
  }

}
