import {Component, OnInit, ViewChild} from '@angular/core';
import {
  DialogService,
  LoginService,
  Observable,
  OComboComponent,
  OFormComponent,
  OTranslateService
} from "ontimize-web-ngx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Opinion} from "../../opinions/opinion";
import {OpinionService} from "../../../shared/services/opinion.service";
import {filter, map, tap} from "rxjs/operators";
import {BookList} from "../../user/book-list";
import {ListService} from "../../../shared/services/list.service";
import {MyListComponent} from "../../user/my-list/my-list.component";

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
              private opinionService: OpinionService,
              private listService: ListService,
              private dialogService: DialogService,
              private translate: OTranslateService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['book_id'];
        this.fetchBookOpinions();
      })

    this.fetchMyList();
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


  myBookList: BookList
  public isListInitialized: boolean = false;

  private fetchMyList() {
    if(this.isLoggedIn()) {
      this.listService.getPrivateUserList().pipe(
        filter(response => response.data.length > 0)
      ).subscribe(
        response => {
          this.isListInitialized = true
          this.myBookList = response.data[0]
          this.listService.getListBooksIds(this.myBookList.list_id).pipe(
            filter(response => response.data.length > 0),
            map(resp => resp.data),
          ).subscribe(value => {
            this.myBookList.books = value
          })
        })
    }
  }

  isBookOnMyList() {
    return this.myBookList && this.myBookList.books && this.myBookList.books.length > 0 && this.myBookList.books.findIndex(value => value.book_id === this.id) !== -1
  }

  toggleBookInMyList() {
    if (this.isBookOnMyList()) {
      let book_list_id: number =this.myBookList.books.find(value => value.book_id === this.id).list_book_id
      this.listService.removeBookFromList(book_list_id, this.id, this.myBookList.list_id).subscribe(
        value => this.dialogService.info(this.translate.get(MyListComponent.LIST_DELETING_BOOK), this.translate.get(MyListComponent.LIST_DELETING_BOOK_OK)),
        error => this.dialogService.error(this.translate.get(MyListComponent.LIST_DELETING_BOOK), this.translate.get(MyListComponent.LIST_DELETING_BOOK_ERROR)),
        () => this.fetchMyList()
      )
    } else {
      this.listService.addBookToUserList(this.id, this.myBookList.list_id).subscribe(
        value => this.dialogService.info(this.translate.get(MyListComponent.LIST_ADDING_BOOK), this.translate.get(MyListComponent.LIST_ADDING_BOOK_OK)),
        error => this.dialogService.error(this.translate.get(MyListComponent.LIST_ADDING_BOOK), this.translate.get(MyListComponent.LIST_ADDING_BOOK_ERROR)),
        () => this.fetchMyList()
      )
    }
  }

}