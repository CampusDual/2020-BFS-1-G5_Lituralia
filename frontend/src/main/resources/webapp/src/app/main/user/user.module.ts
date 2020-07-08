import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {TimelineComponent} from './timeline/timeline.component';
import {ProfileComponent} from './profile/profile.component';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {OpinionsModule} from "../opinions/opinions.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule,
    OpinionsModule
  ],
  declarations: [
    TimelineComponent,
    ProfileComponent
  ]
})
export class UserModule { }
