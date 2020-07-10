import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {Genre} from "../../../../shared/domain/genre";
import {GenreService} from "../../../../shared/services/genre.service";
import {map, tap} from "rxjs/operators";
import {MyListService} from "../../../../shared/services/my-list.service";

@Component({
  selector: 'app-genre-grid',
  templateUrl: './genre-grid.component.html',
  styleUrls: ['./genre-grid.component.scss']
})
export class GenreGridComponent implements OnInit {

  @Output() switchMode = new EventEmitter();

  genres: Observable<Genre[]>
  public TOP_N_BOOKS: number = 5

  constructor(private genreService: GenreService,
              private myListService: MyListService) {
  }

  ngOnInit() {
    this.genres = this.genreService.getGenres().pipe(
      map(value => {
        const genres: Genre[] = value.data
        for (const genre of genres) {
          genre.books = this.genreService.getGenreBooks(genre.genre_id).pipe(
            map(response => response.data),
            map(data => data.filter(book => book.avg_rating)),
            tap(x => x.sort((a, b) => a.avg_rating > b.avg_rating ? -1 : 1)),
            map(books => books.slice(0, this.TOP_N_BOOKS))
          )
        }
        return genres
      })
    )
    this.myListService.fetchMyList();
  }


  switchToTable() {
    this.switchMode.emit()
  }

  isBookInMyList(book_id: number) {
    return this.myListService.isBookInMyList(book_id)
  }

  toggleBookInMyList(book_id: number) {
    return this.myListService.toggleBookInMyList(book_id)
  }
}
