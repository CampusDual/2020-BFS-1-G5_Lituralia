import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {Genre} from "../../genre";
import {GenreService} from "../../../../shared/services/genre.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-genre-grid',
  templateUrl: './genre-grid.component.html',
  styleUrls: ['./genre-grid.component.scss']
})
export class GenreGridComponent implements OnInit {

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


  @Output() switchMode = new EventEmitter();

  switchToTable(){
    this.switchMode.emit()
  }

}
