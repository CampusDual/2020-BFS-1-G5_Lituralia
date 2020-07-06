import {Component, OnInit} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {Opinion} from "../../opinions/opinion";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {OpinionService} from "../../../shared/services/opinion.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-publishers-detail',
  templateUrl: './publishers-detail.component.html',
  styleUrls: ['./publishers-detail.component.scss']
})
export class PublishersDetailComponent implements OnInit {

  id: number;
  opinions: Observable<Opinion[]>

  constructor(private router: Router,
              private route: ActivatedRoute,
              private opinionService: OpinionService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['publisher_id'];
        this.opinions = this.opinionService.getPublisherOpinions(this.id).pipe(
          map(response => response.data),
          tap(x => x.sort((a, b) => a.rating>b.rating ? -1 : 1 )),
        )
      }
    )
  }

}
