import {Observable} from "ontimize-web-ngx";
import {of, throwError} from "rxjs";

export interface OntimizeResponse<T> {
  code: number;
  data: Array<T>;
  message: '';
  sqlTypes?: Object;
  startRecordIndex?: number;
  totalQueryRecordsNumber?: number;
}


export function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.warn(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
export function tapError<T>(operation = 'operation') {
  return (error: any): Observable<T> => {
    console.warn(`${operation} failed: ${error.message}`);
    console.error(error); // log to console instead
    return throwError(error);
  };
}