import {Book} from "./book";
import {Observable} from "ontimize-web-ngx";

export interface Genre {
  genre_id: number,
  genre_name?: string,
  genre_desc?: string

  books?: Observable<Book[]>
}