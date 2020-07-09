import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OntimizeWebModule} from "ontimize-web-ngx";
import {PublishersRoutingModule} from './publishers-routing.module';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";
import {PublishersDetailComponent} from "./publishers-detail/publishers-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {OpinionsModule} from "../opinions/opinions.module";
import {PublisherCardSmallComponent} from "./cards/publisher-card-small/publisher-card-small.component";
import {PublisherCardMediumComponent} from "./cards/publisher-card-medium/publisher-card-medium.component";
import {PublisherGridComponent} from './publishers-home/publisher-grid/publisher-grid.component';
import {PublisherTableComponent} from './publishers-home/publisher-table/publisher-table.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    PublishersRoutingModule,
    SharedModule,
    OpinionsModule
  ],
    exports: [
        PublisherCardSmallComponent,
        PublisherCardMediumComponent
    ],

    declarations: [
        PublishersHomeComponent,
        PublishersDetailComponent,
        PublisherCardSmallComponent,
        PublisherCardMediumComponent,
        PublisherGridComponent,
        PublisherTableComponent
    ]
})
export class PublishersModule { }
