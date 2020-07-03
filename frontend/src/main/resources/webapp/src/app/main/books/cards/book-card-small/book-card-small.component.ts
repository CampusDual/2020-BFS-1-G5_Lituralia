import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../book";

@Component({
  selector: 'app-book-card-small',
  templateUrl: './book-card-small.component.html',
  styleUrls: ['./book-card-small.component.scss']
})
export class BookCardSmallComponent implements OnInit {

  @Input() book: Book
  constructor() { }

  ngOnInit() {
  }

}
