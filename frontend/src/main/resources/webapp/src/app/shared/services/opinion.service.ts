import {Injectable, Injector} from '@angular/core';
import {LoginService, Observable, OntimizeEEService} from "ontimize-web-ngx";
import {OntimizeResponse, tapError} from "./ontimizeResponse";
import {Opinion} from "../domain/opinion";
import {throwError} from "rxjs";
import {ListService} from "./list.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OpinionService extends OntimizeEEService {


  constructor(protected injector: Injector,
              private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/opinions';
    this.configureService(conf)
  }

  getBookOpinions(book_id: number): Observable<OntimizeResponse<Opinion>> {
    const filter = {
      'book_id': book_id
    };
    const columns = [
      "book_id",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "opinion_update",
      "user_"
    ];
    return this.query(filter, columns, 'opinion').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('getBookOpinions'))
    )
  }

  getAuthorOpinions(author_id: number): Observable<OntimizeResponse<Opinion>> {
    const filter = {
      'author_id': author_id
    };
    const columns = [
      "author_id",
      "book_id",
      "title",
      "cover",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "opinion_update",
      "user_"
    ];
    return this.query(filter, columns, 'vAuthorOpinions').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('getAuthorOpinions'))
    )
  }

  getUserOpinions(): Observable<OntimizeResponse<Opinion>> {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const filter = {
      'user_': this.loginService.getSessionInfo().user
    };
    const columns = [
      "book_id",
      "title",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "opinion_update",
      "user_"
    ];
    return this.query(filter, columns, 'vBookOpinions').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('getUserOpinions'))
    )
  }

  getUserOpinion(book_id: number) {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const filter = {
      'user_': this.loginService.getSessionInfo().user,
      'book_id': book_id
    };
    const columns = [
      "book_id",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "opinion_update",
      "user_"
    ];
    return this.query(filter, columns, 'opinion').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('getUserOpinion'))
    )
  }

  createUserOpinion(book_id: number, rating: number, review: string) {
    const data = {
      "book_id": book_id,
      "rating": parseInt(String(rating)),
      "review": review,
      'user_': this.loginService.getSessionInfo().user
    };
    const sqlTypes = {
      "book_id": 4,
      "rating": 4,
      "review": 12,
      "user_": 12
    };
    return this.insert(data, 'opinion', sqlTypes).pipe(
      // tap(x => console.log(x)),
      catchError(tapError('createUserOpinion'))
    )
  }

  updateUserOpinion(opinion_id: number, rating: number, review: string) {
    const filter = {
      'opinion_id': opinion_id
    };
    const data = {
      "rating": parseInt(String(rating)),
      "review": review
    };
    const sqlTypes = {
      "rating": 4,
      "review": 12
    };
    return this.update(filter, data, 'opinion', sqlTypes).pipe(
      // tap(x => console.log(x)),
      catchError(tapError('updateUserOpinion'))
    )
  }

  deleteUserOpinion(opinion_id: number) {
    const filter = {
      'opinion_id': opinion_id
    };
    return this.delete(filter, 'opinion').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('deleteUserOpinion'))
    )
  }


  getPublisherOpinions(publisher_id: number): Observable<OntimizeResponse<Opinion>> {
    const filter = {
      'publisher_id': publisher_id
    };
    const columns = [
      "publisher_id",
      "book_id",
      "title",
      "cover",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "opinion_update",
      "user_"
    ];
    return this.query(filter, columns, 'vPublisherOpinions').pipe(
      // tap(x => console.log(x)),
      catchError(tapError('getPublisherOpinions'))
    )
  }
}
