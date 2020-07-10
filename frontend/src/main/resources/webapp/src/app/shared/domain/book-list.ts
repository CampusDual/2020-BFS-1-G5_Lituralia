import {Book} from "./book";
import {Observable} from "rxjs";

export interface BookList {
  list_id: number;
  list_name: string;
  list_public: boolean;
  list_desc: string;
  list_create: Date;
  list_update: Date;
  user_: string;

  books$:  Promise<Book[]> | Observable<Book[]>

  books: Book[]
}
