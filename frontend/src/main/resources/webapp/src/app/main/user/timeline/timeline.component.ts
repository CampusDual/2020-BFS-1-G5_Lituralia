import {Component, OnInit} from '@angular/core';
import {LoginService, Observable} from "ontimize-web-ngx";
import {OpinionService} from "../../../shared/services/opinion.service";
import {Opinion} from "../../../shared/domain/opinion";
import {filter, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  opinions: Observable<Opinion[]>

  constructor(public loginService: LoginService,
              private opinionService: OpinionService) { }

  ngOnInit() {
    this.opinions = this.opinionService.getUserOpinions().pipe(
      filter(response => response.data.length > 0),
      map(response => response.data),
      tap(x => x.sort((a, b) => (a.opinion_update?a.opinion_update:a.opinion_create)>(b.opinion_update?b.opinion_update:b.opinion_create) ? -1 : 1 )),
    )
  }

  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }
}
