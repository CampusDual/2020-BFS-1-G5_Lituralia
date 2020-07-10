import {Injectable, Injector} from '@angular/core';
import {Observable, OntimizeEEService} from "ontimize-web-ngx";
import {catchError, map} from "rxjs/operators";
import {tapError} from "./ontimizeResponse";
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class SigninService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/signin';
    this.configureService(conf)
  }

  registerUser(user: User): Observable<boolean> {
    const data = {
      "user_": user.user_,
      "password": user.password,
      "name": user.name,
      "surname": user.surname,
      "email": user.email
      // "nif": user.nif,
      // "birthdate": user.birthdate,
      // "avatar": user.avatar,
      // "userblocked": user.userblocked,
      // "lastpasswordupdate": user.lastpasswordupdate,
      // "firstlogin": user.firstlogin,
      // "enabled": user.enabled
    };
    const sqlTypes = {
      "user_": 12,
      "password": 12,
      "name": 12,
      "surname": 12,
      "email": 12,
      // "birthdate": 91,
      // "lastpasswordupdate": 93,
      // "firstlogin": -7,
      // "userblocked": 93,
      // "enabled": -7,
      // "avatar": 12,
      // "nif": 12
    };
    return this.insert(data, 'user', sqlTypes).pipe(
      // tap(x => console.log(x)),// (''\_/'')
      catchError(tapError('registerUser')),
      map(response => response.code === 0)
    )
  }


}
