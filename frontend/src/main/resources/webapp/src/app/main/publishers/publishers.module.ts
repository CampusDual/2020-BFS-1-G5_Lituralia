import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OntimizeWebModule} from "ontimize-web-ngx";
import {PublishersRoutingModule} from './publishers-routing.module';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";
import {PublishersDetailComponent} from "./publishers-detail/publishers-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {OpinionsModule} from "../opinions/opinions.module";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    PublishersRoutingModule,
    SharedModule,
    OpinionsModule
  ],

  declarations: [
      PublishersHomeComponent,
      PublishersDetailComponent
  ]
})
export class PublishersModule { }
