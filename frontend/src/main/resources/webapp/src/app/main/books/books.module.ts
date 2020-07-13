import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {BooksHomeComponent} from "./books-home/books-home.component";
import {BooksDetailComponent} from './books-detail/books-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {BookCardMediumComponent} from './cards/book-card-medium/book-card-medium.component';
import {BookCardSmallComponent} from "./cards/book-card-small/book-card-small.component";
import {BookTableComponent} from './books-home/book-table/book-table.component';
import {BookGridComponent} from './books-home/book-grid/book-grid.component';
import {OpinionsModule} from "../opinions/opinions.module";
import {BookCardWideComponent} from './cards/book-card-wide/book-card-wide.component';
import {AuthorsModule} from "../authors/authors.module";
import {AddToMyListButtonComponent} from './cards/add-to-my-list-button/add-to-my-list-button.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    BooksRoutingModule,
    SharedModule,
    OpinionsModule,
    AuthorsModule
  ],
    exports: [
        BookCardSmallComponent,
        BookCardMediumComponent,
        BookCardWideComponent
  ],
    declarations: [
        BooksHomeComponent,
        BooksDetailComponent,
        BookCardSmallComponent,
        BookCardMediumComponent,
        BookTableComponent,
        BookGridComponent,
        BookCardWideComponent,
        AddToMyListButtonComponent
    ]
})
export class BooksModule {
}
