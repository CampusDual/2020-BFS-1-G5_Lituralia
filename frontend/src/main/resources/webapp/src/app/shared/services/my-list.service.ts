import {Injectable} from '@angular/core';
import {BookList} from "../domain/book-list";
import {Book} from "../domain/book";
import {filter, map} from "rxjs/operators";
import {MyListComponent} from "../../main/user/my-list/my-list.component";
import {DialogService, LoginService, OTranslateService} from "ontimize-web-ngx";
import {ListService} from "./list.service";

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  constructor(private loginService: LoginService,
              private listService: ListService,
              private dialogService: DialogService,
              private translate: OTranslateService) { }



  public myBookList: BookList
  public myList: Book[] = []
  public isListInitialized: boolean = false;

  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }

  public fetchMyList() {
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
