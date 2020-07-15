import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OpinionsRoutingModule} from './opinions-routing.module';
import {OpinionDisplayComponent} from "./opinion-display/opinion-display.component";
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {OntimizeWebModule, OTranslateModule} from "ontimize-web-ngx";
import {OpinionEditComponent} from './opinion-edit/opinion-edit.component';
import {RatingModule} from "ng-starrating";

@NgModule({
  imports: [
    CommonModule,
    OpinionsRoutingModule,
    SharedModule,
    MatCardModule,
    OTranslateModule,
    OntimizeWebModule,
    RatingModule
  ],
  declarations: [
    OpinionDisplayComponent,
    OpinionEditComponent
  ],
  exports: [
    OpinionDisplayComponent,
    OpinionEditComponent
  ]
})
export class OpinionsModule { }
