import {NgModule} from '@angular/core';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {OAppSidenavMenuItemModule} from "ontimize-web-ngx/ontimize/components/app-sidenav/menu-item/o-app-sidenav-menu-item.component";

@NgModule({
    imports: [
        SharedModule,
        OntimizeWebModule,
        MainRoutingModule,
        OAppSidenavMenuItemModule
    ],
    declarations: [
        MainComponent
    ]
})
export class MainModule {
}
