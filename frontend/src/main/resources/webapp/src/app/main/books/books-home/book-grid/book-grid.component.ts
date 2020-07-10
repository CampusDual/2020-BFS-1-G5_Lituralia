import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyListService} from "../../../../shared/services/my-list.service";

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss']
})
export class BookGridComponent implements OnInit {

  @Output() switchMode = new EventEmitter();

  constructor(public myListService: MyListService) { }

  ngOnInit() {
    this.myListService.fetchMyList();
  }

  switchToTable(){
    this.switchMode.emit()
  }


  isBookInMyList(book_id: number) {
    return this.myListService.isBookInMyList(book_id)
  }

  toggleBookInMyList(book_id: number) {
    return this.myListService.toggleBookInMyList(book_id)
  }
}
