import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../../../shared/domain/author";


@Component({
    selector: 'app-author-card-medium',
    templateUrl: './author-card-medium.component.html',
    styleUrls: ['./author-card-medium.component.scss']
})
export class AuthorCardMediumComponent implements OnInit {
    @Input() author: Author

    constructor() {
    }

    ngOnInit() {
    }

    addToMyList(author_id: number) {

    }

    reviewPopup(author_id: number) {

    }
}
