import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../../shared/domain/book";

@Component({
  selector: 'app-book-card-wide',
  templateUrl: './book-card-wide.component.html',
  styleUrls: ['./book-card-wide.component.scss']
})
export class BookCardWideComponent implements OnInit {

  @Input() canRemove : boolean = false
  @Input() book: Book

  @Output() onRemoveAction = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }


  removeAction(book: Book) {
    this.onRemoveAction.emit(book)
  }
}
