import {Component, OnInit} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {Opinion} from "../../../shared/domain/opinion";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {OpinionService} from "../../../shared/services/opinion.service";
import {map, tap} from "rxjs/operators";
import {PublisherService} from "../../../shared/services/publisher.service";

@Component({
  selector: 'app-publishers-detail',
  templateUrl: './publishers-detail.component.html',
  styleUrls: ['./publishers-detail.component.scss']
})
export class PublishersDetailComponent implements OnInit {

  id: number;
  opinions: Observable<Opinion[]>

  rating:{avg_rating:number, ratings:number}

  constructor(private router: Router,
              private route: ActivatedRoute,
              private opinionService: OpinionService,
              private publisherService: PublisherService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['publisher_id'];
        this.opinions = this.opinionService.getPublisherOpinions(this.id).pipe(
          map(response => response.data),
          tap(x => x.sort((a, b) => (a.opinion_update?a.opinion_update:a.opinion_create)>(b.opinion_update?b.opinion_update:b.opinion_create) ? -1 : 1 )),
        )
      }
    )
    this.fetchRating()
  }

  private fetchRating() {
    this.publisherService.getPublisherRating(this.id).subscribe(value => this.rating=value)
  }
}
