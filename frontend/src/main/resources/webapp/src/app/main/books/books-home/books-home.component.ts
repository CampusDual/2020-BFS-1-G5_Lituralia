import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-books-home',
    templateUrl: './books-home.component.html',
    styleUrls: ['./books-home.component.scss']
})
export class BooksHomeComponent implements OnInit {

    tableMode:boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    switchMode() {
        this.tableMode = !this.tableMode;
    }
}
