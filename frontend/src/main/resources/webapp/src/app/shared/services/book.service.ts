import {Injectable, Injector} from '@angular/core';
import {LoginService, Observable, OntimizeEEService} from "ontimize-web-ngx";
import {catchError, map} from "rxjs/operators";
import {tapError} from "./ontimizeResponse";

@Injectable({
  providedIn: 'root'
})
export class BookService  extends OntimizeEEService {


  constructor(protected injector: Injector,
              private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/books';
    this.configureService(conf)
  }


  getBookRating(book_id: number): Observable<{book_id: number, avg_rating: number, ratings: number}>{
    const filter = {
      'book_id': book_id
    };
    const columns = [
      "book_id",
      "avg_rating",
      "ratings"
    ];
    return this.query(filter, columns, 'vBookRatings').pipe(
      map(value => value.data[0]),
      // tap(x => console.log(x)),
      catchError(tapError('getBookRating'))
    )
  }

}
