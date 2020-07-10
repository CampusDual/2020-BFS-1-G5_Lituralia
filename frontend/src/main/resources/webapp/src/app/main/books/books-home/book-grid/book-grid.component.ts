import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookList} from "../../../user/book-list";
import {filter, map} from "rxjs/operators";
import {DialogService, LoginService, OTranslateService} from "ontimize-web-ngx";
import {ListService} from "../../../../shared/services/list.service";
import {MyListComponent} from "../../../user/my-list/my-list.component";
import {Book} from "../../book";

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss']
})
export class BookGridComponent implements OnInit {

  @Output() switchMode = new EventEmitter();

  constructor(private loginService: LoginService,
              private listService: ListService,
              private dialogService: DialogService,
              private translate: OTranslateService) { }

  ngOnInit() {

    this.fetchMyList();
  }

  switchToTable(){
    this.switchMode.emit()
  }

  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }


  myBookList: BookList
  myList: Book[] = []
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
            this.myList = value
          })
        })
    }
  }

  isBookInMyList(book_id:number) {
    return this.myList.length > 0 && this.myList.findIndex(value => value.book_id === book_id) !== -1
  }

  toggleBookInMyList(book_id:number) {
    if (this.isBookInMyList(book_id)) {
      let book_list_id: number =this.myList.find(value => value.book_id === book_id).list_book_id
      this.listService.removeBookFromList(book_list_id, book_id, this.myBookList.list_id).subscribe(
        value => {
          // this.dialogService.info(this.translate.get(MyListComponent.LIST_DELETING_BOOK), this.translate.get(MyListComponent.LIST_DELETING_BOOK_OK))
        },
        error => this.dialogService.error(this.translate.get(MyListComponent.LIST_DELETING_BOOK), this.translate.get(MyListComponent.LIST_DELETING_BOOK_ERROR)),
        () => this.fetchMyList()
      )
    } else {
      this.listService.addBookToUserList(book_id, this.myBookList.list_id).subscribe(
        value => {
          // this.dialogService.info(this.translate.get(MyListComponent.LIST_ADDING_BOOK), this.translate.get(MyListComponent.LIST_ADDING_BOOK_OK))
        },
        error => this.dialogService.error(this.translate.get(MyListComponent.LIST_ADDING_BOOK), this.translate.get(MyListComponent.LIST_ADDING_BOOK_ERROR)),
        () => this.fetchMyList()
      )
    }
  }
}
