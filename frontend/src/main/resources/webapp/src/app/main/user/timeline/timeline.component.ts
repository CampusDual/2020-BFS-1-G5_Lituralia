import {Component, OnInit} from '@angular/core';
import {LoginService, Observable} from "ontimize-web-ngx";
import {OpinionService} from "../../../shared/services/opinion.service";
import {Opinion} from "../../opinions/opinion";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  opinions: Observable<Opinion[]>
  private user: string;

  constructor(private loginService: LoginService,
              private opinionService: OpinionService) { }

  ngOnInit() {
    this.user = this.loginService.getSessionInfo().user
    this.opinions = this.opinionService.getUserOpinions(this.user).pipe(
      map(response => response.data),
      tap(x => x.sort((a, b) => (a.opinion_update?a.opinion_update:a.opinion_create)>(b.opinion_update?b.opinion_update:b.opinion_create) ? -1 : 1 )),
    )
  }

}
