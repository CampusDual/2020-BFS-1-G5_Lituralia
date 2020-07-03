import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss']
})
export class BookGridComponent implements OnInit {

  @Output() switchMode = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  switchToTable(){
    this.switchMode.emit(true)
  }
}
