import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ProfileComponent} from './profile/profile.component';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {OpinionsModule} from "../opinions/opinions.module";
import {MyListComponent} from './my-list/my-list.component';
import {BooksModule} from "../books/books.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule,
    OpinionsModule,
    BooksModule
  ],
  declarations: [
    TimelineComponent,
    ProfileComponent,
    MyListComponent
  ]
})
export class UserModule { }
