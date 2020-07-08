import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OpinionsRoutingModule} from './opinions-routing.module';
import {OpinionDisplayComponent} from "./opinion-display/opinion-display.component";
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {OTranslateModule} from "ontimize-web-ngx";

@NgModule({
  imports: [
    CommonModule,
    OpinionsRoutingModule,
    SharedModule,
    MatCardModule,
    OTranslateModule
  ],
  declarations: [
    OpinionDisplayComponent
  ],
  exports:[
    OpinionDisplayComponent
  ]
})
export class OpinionsModule { }
