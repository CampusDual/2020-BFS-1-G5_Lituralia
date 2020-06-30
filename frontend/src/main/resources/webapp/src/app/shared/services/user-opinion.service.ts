import {Injectable, Injector} from '@angular/core';
import {LoginService, OntimizeEEService} from "ontimize-web-ngx";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserOpinionService extends OntimizeEEService {


  constructor(protected injector: Injector, private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/opinions';
    this.configureService(conf)
  }

  getUserOpinion(user_: string, book_id: number) {
    const filter = {
      'user_': user_,
      'book_id': book_id
    };
    const columns = [
      "book_id",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "user_"
    ];
    return this.query(filter, columns, 'opinion').pipe(
      tap(x => console.log(x))
    )
  }

  updateUserOpinion(opinion_id: number, rating: number, review: string) {
    const filter = {
      'opinion_id': opinion_id
    };
    const data = {
      "rating": parseInt(String(rating)),
      "review": review,
      "opinion_update": new Date().getTime()
    };
    const sqlTypes = {
      "rating": 4,
      "review": 12,
      "opinion_update": 91
    };
    return this.update(filter, data, 'opinion', sqlTypes).pipe(
      tap(x => console.log(x))
    )
  }
}
