import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresHomeComponent } from './genres-home/genres-home.component';
import {OntimizeWebModule} from "ontimize-web-ngx";
import { GenresDetailComponent } from './genres-detail/genres-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {GenresTopComponent} from "./genres-top/genres-top.component";

@NgModule({
    imports: [
        CommonModule,
        GenresRoutingModule,
        OntimizeWebModule,
        SharedModule
    ],
  declarations: [
      GenresHomeComponent,
      GenresDetailComponent,
      GenresTopComponent
  ]
})
export class GenresModule { }
