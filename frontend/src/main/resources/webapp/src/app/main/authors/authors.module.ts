import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorsRoutingModule} from './authors-routing.module';
import {AuthorsHomeComponent} from './authors-home/authors-home.component';
import {AuthorsDetailComponent} from './authors-detail/authors-detail.component';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {SharedModule} from "../../shared/shared.module";
import {OpinionsModule} from "../opinions/opinions.module";

import {AuthorTableComponent} from './authors-home/author-table/author-table.component';
import {AuthorCardMediumComponent} from './cards/author-card-medium/author-card-medium.component';
import {AuthorCardSmallComponent} from './cards/author-card-small/author-card-small.component';
import {AuthorGridComponent} from './authors-home/author-grid/author-grid.component';
import {AuthorCardMiniComponent} from './cards/author-card-mini/author-card-mini.component';


@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule,
    SharedModule,
    OpinionsModule
  ],
  exports: [
    AuthorCardMiniComponent
  ],
  declarations: [
    AuthorsHomeComponent,
    AuthorsDetailComponent,
    AuthorGridComponent,
    AuthorTableComponent,
    AuthorCardMediumComponent,
    AuthorCardSmallComponent,
    AuthorCardMiniComponent,

  ]
})
export class AuthorsModule {
}
