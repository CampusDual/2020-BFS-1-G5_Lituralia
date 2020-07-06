import {Injectable, Injector} from '@angular/core';
import {Observable, OntimizeEEService} from "ontimize-web-ngx";
import {tap} from "rxjs/operators";
import {Genre} from "../../main/genres/genre";
import {OntimizeResponse} from "./ontimizeResponse";
import {Book} from "../../main/books/book";

@Injectable({
  providedIn: 'root'
})
export class GenreService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/genres';
    this.configureService(conf)
  }

  getGenres(): Observable<OntimizeResponse<Genre>> {
    const filter = {};
    const columns = [
      "genre_id", "genre_name", "genre_desc"
    ];
    return this.query(filter, columns, 'genre').pipe(
      tap(x => console.log(x))
    )
  }

  getGenreBooks(genre_id: number): Observable<OntimizeResponse<Book>> {
    const filter = {
      'genre_id': genre_id
    };
    const columns = [
      "book_id", "isbn", "cover", "title", "synopsis",
      "publish_date","publisher_id", "publisher_name", "author_names",
      "author_ids","genre_names", "genre_ids", "avg_rating", "ratings"
    ];
    return this.query(filter, columns, 'vGenreBookDetails').pipe(
      tap(x => console.log(x))
    )
  }



}
