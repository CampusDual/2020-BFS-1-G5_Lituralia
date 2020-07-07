import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-author-grid',
    templateUrl: './author-grid.component.html',
    styleUrls: ['./author-grid.component.scss']
})
export class AuthorGridComponent implements OnInit {
    @Output() switchMode = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    switchToTable() {
        this.switchMode.emit(true)
    }
}
