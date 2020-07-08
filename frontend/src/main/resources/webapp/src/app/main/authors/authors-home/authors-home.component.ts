import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-authors-home',
    templateUrl: './authors-home.component.html',
    styleUrls: ['./authors-home.component.scss']
})
export class AuthorsHomeComponent implements OnInit {

    tableMode: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    switchMode() {
        this.tableMode = !this.tableMode;
    }
}
