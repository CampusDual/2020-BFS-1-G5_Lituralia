import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService, Observable, OComboComponent, OFormComponent} from "ontimize-web-ngx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Opinion} from "../../opinions/opinion";
import {OpinionService} from "../../../shared/services/opinion.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  id: number;
  opinions: Observable<Opinion[]>

  @ViewChild('bookForm', {read: OFormComponent}) public bookForm: OFormComponent;


  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private opinionService: OpinionService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['book_id'];
        this.fetchBookOpinions();
      })
  }

  private fetchBookOpinions() {
    this.opinions = this.opinionService.getBookOpinions(this.id).pipe(
      map(response => response.data),
      tap(x => x.sort((a, b) => a.rating > b.rating ? -1 : 1)),
    )
  }

  void() {
  }

  public reloadBook() {
    this.bookForm._reloadAction(true)
    this.fetchBookOpinions()
  }

  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }




  onPublisherClick(combo: OComboComponent) {
    if (combo) {
      if (combo.value) {
        if (combo.value.value) {
          this.router.navigate(['/main', 'publishers', combo.value.value])
        }
      }
    }
  }
}