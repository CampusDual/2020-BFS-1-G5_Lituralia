import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {TimelineComponent} from "./timeline/timeline.component";

const routes: Routes = [{
  path : '',
  component : ProfileComponent
},
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path: "timeline",
    component: TimelineComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
