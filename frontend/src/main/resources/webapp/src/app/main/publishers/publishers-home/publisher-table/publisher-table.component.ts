import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OTableButtonComponent} from "ontimize-web-ngx";

@Component({
  selector: 'app-publisher-table',
  templateUrl: './publisher-table.component.html',
  styleUrls: ['./publisher-table.component.scss']
})
export class PublisherTableComponent implements OnInit {

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
