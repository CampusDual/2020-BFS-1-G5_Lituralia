import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OntimizeWebModule } from "ontimize-web-ngx";
import { PublishersRoutingModule } from './publishers-routing.module';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";
import {PublishersDetailComponent} from "./publishers-detail/publishers-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {PublisherCardSmallComponent} from "./cards/publisher-card-small/publisher-card-small.component";
import {PublisherCardMediumComponent} from "./cards/publisher-card-medium/publisher-card-medium.component";
import {BookCardSmallComponent} from "../books/cards/book-card-small/book-card-small.component";
import {BookCardMediumComponent} from "../books/cards/book-card-medium/book-card-medium.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    PublishersRoutingModule,
      SharedModule
  ],
    exports: [
        PublisherCardSmallComponent,
        PublisherCardMediumComponent
    ],

    declarations: [
        PublishersHomeComponent,
        PublishersDetailComponent,
        PublisherCardSmallComponent,
        PublisherCardMediumComponent
    ]
})
export class PublishersModule { }
