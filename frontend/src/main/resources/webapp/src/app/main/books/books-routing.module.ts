import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksHomeComponent} from "./books-home/books-home.component";
import {BooksDetailComponent} from "./books-detail/books-detail.component";

const routes: Routes = [{
  path: '',
  component: BooksHomeComponent
  },
  {
    path: "new",
    component: BooksDetailComponent
  },
  {
    path: ":book_id",
    component: BooksDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
