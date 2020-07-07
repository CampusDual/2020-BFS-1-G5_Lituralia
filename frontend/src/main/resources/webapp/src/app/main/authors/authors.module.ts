import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorsRoutingModule} from './authors-routing.module';
import {AuthorsHomeComponent} from './authors-home/authors-home.component';
import {AuthorsDetailComponent} from './authors-detail/authors-detail.component';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {SharedModule} from "../../shared/shared.module";
import {OpinionsModule} from "../opinions/opinions.module";
import { AuthorCardComponent } from './author-card/author-card.component';
import { AuthorGridComponent } from './authors-home/author-grid/author-grid.component';
import { AuthorTableComponent } from './authors-home/author-table/author-table.component';
import { AuthorCardMediumComponent } from './cards/author-card-medium/author-card-medium.component';
import { AuthorCardSmallComponent } from './cards/author-card-small/author-card-small.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule,
    SharedModule,
    OpinionsModule
  ],
  declarations: [
    AuthorsHomeComponent,
    AuthorsDetailComponent,
    AuthorCardComponent,
    AuthorGridComponent,
    AuthorTableComponent,
    AuthorCardMediumComponent,
    AuthorCardSmallComponent
  ]
})
export class AuthorsModule {
}
