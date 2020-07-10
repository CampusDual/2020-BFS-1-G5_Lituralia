import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OTableButtonComponent} from "ontimize-web-ngx";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit, AfterViewInit{

  @Output() switchMode = new EventEmitter<any>();

  @ViewChild('switchBtn')
  protected switchBtn: OTableButtonComponent;

  ngAfterViewInit() {
    this.switchBtn.onClick.subscribe(event => {
      this.switchMode.emit()
    });
  }

  constructor() { }

  ngOnInit() {
  }


}
