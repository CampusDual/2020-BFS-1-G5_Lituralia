import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublishersHomeComponent} from "./publishers-home/publishers-home.component";

const routes: Routes = [{
  path : '',
  component : PublishersHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }
