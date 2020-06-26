import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { PublishersRoutingModule } from './publishers-routing.module';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    PublishersRoutingModule
  ],

  declarations: [
      PublishersHomeComponent
  ]
})
export class PublishersModule { }
