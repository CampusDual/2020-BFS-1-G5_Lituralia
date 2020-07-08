import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../author";


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

    getImageSrc(author_portrait: any) {
        return 'data:image/png;base64,' + author_portrait;
    }

    addToMyList(author_id: number) {

    }

    reviewPopup(author_id: number) {

    }
}
