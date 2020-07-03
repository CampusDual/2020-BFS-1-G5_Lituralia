import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenresHomeComponent} from "./genres-home/genres-home.component";
import {GenresDetailComponent} from "./genres-detail/genres-detail.component";
import {AuthorsDetailComponent} from "../authors/authors-detail/authors-detail.component";
import {GenresTopComponent} from "./genres-top/genres-top.component";

const routes: Routes = [
  {
    path: '',
    component: GenresHomeComponent
  },
  {
    path: "new",
    component: GenresDetailComponent
  },{
    path: "top",
    component: GenresTopComponent

  },
  {
    path: ":genre_id",
    component: GenresDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
