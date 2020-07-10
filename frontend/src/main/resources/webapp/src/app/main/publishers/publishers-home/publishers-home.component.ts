import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-publishers-home',
  templateUrl: './publishers-home.component.html',
  styleUrls: ['./publishers-home.component.scss']
})
export class PublishersHomeComponent implements OnInit {

  tableMode:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  switchMode() {
    this.tableMode = !this.tableMode;
  }
}
