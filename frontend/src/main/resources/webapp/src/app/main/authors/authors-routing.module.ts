import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsHomeComponent} from "./authors-home/authors-home.component";
import {AuthorsDetailComponent} from "./authors-detail/authors-detail.component";

const routes: Routes = [{
  path: '',
  component: AuthorsHomeComponent
},
  {
    path: "new",
    component: AuthorsDetailComponent
  },
  {
    path: ":author_id",
    component: AuthorsDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule {
}
