import {Injectable, Injector} from '@angular/core';
import {LoginService, Observable, OntimizeEEService} from "ontimize-web-ngx";
import {catchError, tap} from "rxjs/operators";
import {OntimizeResponse} from "./ontimizeResponse";
import {Book} from "../../main/books/book";
import {BookList} from "../../main/user/book-list";
import {of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService extends OntimizeEEService {

  constructor(protected injector: Injector,
              private loginService: LoginService) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/lists';
    this.configureService(conf)
  }

  getLists(): Observable<OntimizeResponse<BookList>> {
    const filter = {};
    const columns = [
      "list_id", "list_name", "list_public", "list_desc", "list_create", "list_update", "user_"
    ];
    return this.query(filter, columns, 'list').pipe(
      tap(x => console.log(x)),
      catchError(this.handleError('getLists'))
    )
  }

  public static NOT_LOGGED_IN = "NOT_LOGGED_IN";

  getPrivateUserList(): Observable<OntimizeResponse<BookList>> {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const filter = {
      'user_': this.loginService.getSessionInfo().user,
      'list_public': false
    };
    const columns = [
      "list_id", "list_name", "list_public", "list_desc", "list_create", "list_update", "user_"
    ];
    return this.query(filter, columns, 'list').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError('getPrivateUserList'))
    )
  }


  initPrivateList(): Observable<OntimizeResponse<BookList>> {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const data = {
      "list_name": "MY_LIST",
      "list_desc": "",
      'user_': this.loginService.getSessionInfo().user,
      'list_public': false,
    };
    return this.insert(data, 'list').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError('initPrivateList'))
    )
  }

  getListBooks(list_id: number): Observable<OntimizeResponse<Book>> {
    const filter = {
      'list_id': list_id
    };
    const columns = [
      "book_id", "isbn", "cover", "title", "synopsis",
      "publish_date", "publisher_id",
      "publisher_name", "author_names", "author_ids", "genre_names", "genre_ids", "avg_rating", "ratings",
      "list_id", "list_book_id",
    ];
    return this.query(filter, columns, 'vListBook').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError('getListBooks'))
    )
  }

  getListBooksIds(list_id: number): Observable<OntimizeResponse<Book>> {
    const filter = {
      'list_id': list_id
    };
    const columns = [
      "book_id",
      "list_id", "list_book_id"
    ];
    return this.query(filter, columns, 'vListBook').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError('getListBooksIds'))
    )
  }

  removeBookFromList(list_book_id: number, book_id: number, list_id: number) {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const filter = {
      'list_book_id': list_book_id,
      'book_id': book_id,
      'list_id': list_id
    };
    return this.delete(filter, 'listBook').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError('removeBookFromList'))
    )
  }


  addBookToUserList(book_id: number, list_id: number) {
    if (!this.loginService.getSessionInfo().user)
      return throwError(new Error(ListService.NOT_LOGGED_IN))
    const data = {
      "list_id": list_id,
      "book_id": book_id
    };
    return this.insert(data, 'listBook').pipe(
      // tap(x => console.log(x)),
      catchError(this.handleError(''))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
