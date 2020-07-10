import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenresRoutingModule} from './genres-routing.module';
import {GenresHomeComponent} from './genres-home/genres-home.component';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {GenresDetailComponent} from './genres-detail/genres-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {BooksModule} from "../books/books.module";
import {GenreTableComponent} from './genres-home/genre-table/genre-table.component';
import {GenreGridComponent} from './genres-home/genre-grid/genre-grid.component';

@NgModule({
  imports: [
    CommonModule,
    GenresRoutingModule,
    OntimizeWebModule,
    SharedModule,
    BooksModule
  ],
  declarations: [
      GenresHomeComponent,
      GenresDetailComponent,
      GenreTableComponent,
      GenreGridComponent
  ]
})
export class GenresModule { }
