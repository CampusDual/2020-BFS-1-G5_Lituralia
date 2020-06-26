import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresHomeComponent } from './genres-home/genres-home.component';
import {OntimizeWebModule} from "ontimize-web-ngx";
import { GenresDetailComponent } from './genres-detail/genres-detail.component';

@NgModule({
    imports: [
        CommonModule,
        GenresRoutingModule,
        OntimizeWebModule
    ],
  declarations: [
      GenresHomeComponent,
      GenresDetailComponent
  ]
})
export class GenresModule { }
