import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OTableButtonComponent} from "ontimize-web-ngx";

@Component({
  selector: 'app-author-table',
  templateUrl: './author-table.component.html',
  styleUrls: ['./author-table.component.scss']
})
export class AuthorTableComponent implements OnInit {

  @Output() switchMode = new EventEmitter<boolean>();

  @ViewChild('switchBtn')
  protected switchBtn: OTableButtonComponent;

  ngAfterViewInit() {
    this.switchBtn.onClick.subscribe(event => {
      this.switchMode.emit(true)
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
