import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresHomeComponent } from './genres-home/genres-home.component';
import {OntimizeWebModule} from "ontimize-web-ngx";

@NgModule({
    imports: [
        CommonModule,
        GenresRoutingModule,
        OntimizeWebModule
    ],
  declarations: [
      GenresHomeComponent
  ]
})
export class GenresModule { }
