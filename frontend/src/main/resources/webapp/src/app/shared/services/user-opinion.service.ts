import {Injectable, Injector} from '@angular/core';
import {LoginService, OntimizeEEService} from "ontimize-web-ngx";

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
}
