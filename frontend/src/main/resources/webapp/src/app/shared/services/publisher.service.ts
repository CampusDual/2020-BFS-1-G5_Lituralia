import {Injectable, Injector} from '@angular/core';
import {LoginService, Observable, OntimizeEEService} from "ontimize-web-ngx";
import {catchError, map} from "rxjs/operators";
import {tapError} from "./ontimizeResponse";

@Injectable({
  providedIn: 'root'
})
export class PublisherService  extends OntimizeEEService {


  constructor(protected injector: Injector,
              private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/publishers';
    this.configureService(conf)
  }


  getPublisherRating(publisher_id: number): Observable<{publisher_id: number, avg_rating: number, ratings: number}>{
    const filter = {
      'publisher_id': publisher_id
    };
    const columns = [
      "publisher_id",
      "avg_rating",
      "ratings"
    ];
    return this.query(filter, columns, 'vPublisherRatings').pipe(
      map(value => value.data[0]),
      // tap(x => console.log(x)),
      catchError(tapError('getPublisherRating'))
    )
  }

}
