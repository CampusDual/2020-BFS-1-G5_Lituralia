import {Injectable, Injector} from '@angular/core';
import {Observable, OntimizeEEService} from "ontimize-web-ngx";
import {OntimizeResponse} from "./ontimizeResponse";
import {Opinion} from "../../main/opinions/opinion";

@Injectable({
  providedIn: 'root'
})
export class OpinionService extends OntimizeEEService {


  constructor(protected injector: Injector) {
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
      "user_"
    ];
    return this.query(filter, columns, 'opinion').pipe(
      // tap(x => console.log(x))
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
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "user_"
    ];
    return this.query(filter, columns, 'vAuthorOpinions').pipe(
      // tap(x => console.log(x))
    )
  }

  getUserOpinions(user_: string): Observable<OntimizeResponse<Opinion>> {
    const filter = {
      'user_': user_
    };
    const columns = [
      "book_id",
      "title",
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "user_"
    ];
    return this.query(filter, columns, 'vBookOpinions').pipe(
      // tap(x => console.log(x))
    )
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
      // tap(x => console.log(x))
    )
  }

  createUserOpinion(user_:string, book_id:number, rating: number, review: string){
    const data = {
      "book_id": book_id,
      "rating": parseInt(String(rating)),
      "review": review,
      "user_":user_
    };
    const sqlTypes = {
      "book_id":4,
      "rating":4,
      "review":12,
      "user_":12
    };
    return this.insert(data, 'opinion', sqlTypes).pipe(
      // tap(x => console.log(x))
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
      // tap(x => console.log(x))
    )
  }

  deleteUserOpinion(opinion_id: number) {
    const filter = {
      'opinion_id': opinion_id
    };
    return this.delete(filter, 'opinion').pipe(
      // tap(x => console.log(x))
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
      "opinion_id",
      "rating",
      "review",
      "opinion_create",
      "user_"
    ];
    return this.query(filter, columns, 'vPublisherOpinions').pipe(
      // tap(x => console.log(x))
    )
  }
}
