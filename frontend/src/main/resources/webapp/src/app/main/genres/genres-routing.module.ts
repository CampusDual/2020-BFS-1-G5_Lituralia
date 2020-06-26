import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenresHomeComponent} from "./genres-home/genres-home.component";

const routes: Routes = [
  {
    path:'',
    component: GenresHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
