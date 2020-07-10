import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-genre-home',
  templateUrl: './genres-home.component.html',
  styleUrls: ['./genres-home.component.scss']
})
export class GenresHomeComponent implements OnInit {



  tableMode:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  switchMode() {
    this.tableMode = !this.tableMode;
  }
}
