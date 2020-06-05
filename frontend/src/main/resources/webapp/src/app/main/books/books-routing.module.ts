import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksHomeComponent} from "./books-home/books-home.component";

const routes: Routes = [{
  path: '',
  component: BooksHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
