import {Component, OnInit} from '@angular/core';
import {Observable} from "ontimize-web-ngx";
import {Opinion} from "../../../shared/domain/opinion";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {OpinionService} from "../../../shared/services/opinion.service";
import {map, tap} from "rxjs/operators";
import {AuthorService} from "../../../shared/services/author.service";

@Component({
  selector: 'app-authors-detail',
  templateUrl: './authors-detail.component.html',
  styleUrls: ['./authors-detail.component.scss']
})
export class AuthorsDetailComponent implements OnInit {

  id: number;
  opinions: Observable<Opinion[]>

  rating:{avg_rating:number, ratings:number}

  constructor(private router: Router,
              private route: ActivatedRoute,
              private opinionService: OpinionService,
              public authorService: AuthorService) {
  }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['author_id'];
        this.opinions = this.opinionService.getAuthorOpinions(this.id).pipe(
          map(response => response.data),
          tap(x => x.sort((a, b) => (a.opinion_update?a.opinion_update:a.opinion_create)>(b.opinion_update?b.opinion_update:b.opinion_create) ? -1 : 1 )),
        )
      }
    )

    this.fetchAuthorRating()
  }

  private fetchAuthorRating() {

      this.authorService.getAuthorRating(this.id).subscribe(value => this.rating=value)
  }
}
