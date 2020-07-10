import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {SigninModule} from "./signin/signin.module";
import {LogoutGuard} from "./shared/services/logout.guard";

export function loadLoginModule() {
    return LoginModule;
}

export function loadSigninModule() {
    return SigninModule;
}

export function loadMainModule() {
    return MainModule;
}

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: loadMainModule
    },
    {
        path: 'login',
        loadChildren: loadLoginModule,
        canActivate:[LogoutGuard]
    },
    {
        path: 'signin',
        loadChildren: loadSigninModule,
        canActivate:[LogoutGuard]
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
];

const opt = {
    // enableTracing: true if you want to print navigation routes
    enableTracing: false,
    useHash: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, opt)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
