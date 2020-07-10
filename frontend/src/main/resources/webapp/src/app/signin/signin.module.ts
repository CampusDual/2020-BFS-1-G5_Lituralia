import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SigninRoutingModule} from './signin-routing.module';
import {SigninComponent} from './signin.component';
import {OntimizeWebModule} from "ontimize-web-ngx";

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    OntimizeWebModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
