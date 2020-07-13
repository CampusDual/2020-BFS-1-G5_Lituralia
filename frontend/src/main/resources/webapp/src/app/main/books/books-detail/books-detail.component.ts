import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, OComboComponent, OFormComponent} from "ontimize-web-ngx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Opinion} from "../../../shared/domain/opinion";
import {OpinionService} from "../../../shared/services/opinion.service";
import {map, tap} from "rxjs/operators";
import {MyListService} from "../../../shared/services/my-list.service";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss'],
  providers: [MyListService]
})
export class BooksDetailComponent implements OnInit {

  id: number;
  opinions: Observable<Opinion[]>

  @ViewChild('bookForm', {read: OFormComponent}) public bookForm: OFormComponent;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private opinionService: OpinionService,
              private myListService: MyListService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['book_id'];
        this.fetchBookOpinions();
        this.myListService.fetchMyList();
      })

  }

  private fetchBookOpinions() {
    this.opinions = this.opinionService.getBookOpinions(this.id).pipe(
      map(response => response.data),
      tap(x => x.sort((a, b) => (a.opinion_update?a.opinion_update:a.opinion_create)>(b.opinion_update?b.opinion_update:b.opinion_create) ? -1 : 1 )),
    )
  }

  public reloadBook() {
    this.bookForm._reloadAction(true)
    this.fetchBookOpinions()
    this.myListService.fetchMyList();
  }

  public isLoggedIn() {
    return this.myListService.isLoggedIn()
  }


  onPublisherClick(combo: OComboComponent) {
    if (combo && combo.value && combo.value.value) {
      this.router.navigate(['/main', 'publishers', combo.value.value])
    }
  }


  isBookOnMyList() {
    return this.myListService.isBookInMyList(this.id)
  }

  toggleBookInMyList() {
    return this.myListService.toggleBookInMyList(this.id)
  }

}