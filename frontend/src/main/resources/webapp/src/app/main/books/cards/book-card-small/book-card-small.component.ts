import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../book";
import {LoginService} from "ontimize-web-ngx";

@Component({
  selector: 'app-book-card-small',
  templateUrl: './book-card-small.component.html',
  styleUrls: ['./book-card-small.component.scss']
})
export class BookCardSmallComponent implements OnInit {

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
