import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";
import {PublishersDetailComponent} from "./publishers-detail/publishers-detail.component";

const routes: Routes = [{
  path : '',
  component : PublishersHomeComponent
},
  {
    path : 'new',
    component : PublishersDetailComponent
  },
  {
    path: ":publisher_id",
    component: PublishersDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }
