import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OTableButtonComponent} from "ontimize-web-ngx";

@Component({
  selector: 'app-genre-table',
  templateUrl: './genre-table.component.html',
  styleUrls: ['./genre-table.component.scss']
})
export class GenreTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() switchMode = new EventEmitter<any>();

  @ViewChild('switchBtn')
  protected switchBtn: OTableButtonComponent;

  ngAfterViewInit() {
    this.switchBtn.onClick.subscribe(event => {
      this.switchMode.emit()
    });
  }

}
