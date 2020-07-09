import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-publisher-grid',
  templateUrl: './publisher-grid.component.html',
  styleUrls: ['./publisher-grid.component.scss']
})
export class PublisherGridComponent implements OnInit {

  @Output() switchMode = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchToTable(){
    this.switchMode.emit()
  }

}
