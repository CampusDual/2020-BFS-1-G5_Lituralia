import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorsRoutingModule} from './authors-routing.module';
import {AuthorsHomeComponent} from './authors-home/authors-home.component';
import {AuthorsDetailComponent} from './authors-detail/authors-detail.component';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthorsHomeComponent,
    AuthorsDetailComponent
  ]
})
export class AuthorsModule {
}
