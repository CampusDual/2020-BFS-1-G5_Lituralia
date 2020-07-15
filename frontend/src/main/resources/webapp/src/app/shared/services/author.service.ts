import {Injectable, Injector} from '@angular/core';
import {LoginService, Observable, OntimizeEEService} from "ontimize-web-ngx";
import {catchError, map} from "rxjs/operators";
import {tapError} from "./ontimizeResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthorService  extends OntimizeEEService {


  constructor(protected injector: Injector,
              private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/authors';
    this.configureService(conf)
  }


  getAuthorRating(author_id: number): Observable<{author_id: number, avg_rating: number, ratings: number}>{
    const filter = {
      'author_id': author_id
    };
    const columns = [
      "author_id",
      "avg_rating",
      "ratings"
    ];
    return this.query(filter, columns, 'vAuthorRatings').pipe(
      map(value => value.data[0]),
      // tap(x => console.log(x)),
      catchError(tapError('getAuthorRating'))
    )
  }

}
