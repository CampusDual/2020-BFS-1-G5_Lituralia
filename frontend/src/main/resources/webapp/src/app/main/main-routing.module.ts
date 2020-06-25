import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from 'ontimize-web-ngx';

import {MainComponent} from './main.component';
import {HomeModule} from './home/home.module';
import {BooksModule} from "./books/books.module";
import {AuthorsModule} from "./authors/authors.module";
import {GenresModule} from "./genres/genres.module";

export function loadHomeModule() {
    return HomeModule;
}

export function loadBooksModule() {
    return BooksModule;
}

export function loadAuthorsModule() {
    return AuthorsModule;
}

export function loadGenreModule() {
    return GenresModule;
}

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {
                path: 'home',
                loadChildren: loadHomeModule
            },
            {
                path: 'books',
                loadChildren: loadBooksModule
            },
            {
                path: 'authors',
                loadChildren: loadAuthorsModule
            },
            {
                path: 'genres',
                loadChildren: loadGenreModule
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
