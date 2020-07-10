import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../../shared/domain/book";
import {LoginService} from "ontimize-web-ngx";

@Component({
  selector: 'app-publisher-card-medium',
  templateUrl: './book-card-medium.component.html',
  styleUrls: ['./book-card-medium.component.scss']
})
export class BookCardMediumComponent implements OnInit {

  @Input() book: Book

  @Output() toggle = new EventEmitter();
  @Input() isInList = false
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }


  reviewPopup(book_id: number) {

  }

  toggleBookInMyList() {
    this.toggle.emit()
  }
}
