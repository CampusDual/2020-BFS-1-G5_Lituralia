import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main.component';
import {HomeModule} from './home/home.module';
import {BooksModule} from "./books/books.module";
import {AuthorsModule} from "./authors/authors.module";
import {GenresModule} from "./genres/genres.module";
import {PublishersModule} from "./publishers/publishers.module";
import {UserModule} from "./user/user.module";


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

export function loadPublishersModule() {
    return PublishersModule;
}

export function loadUserModule() {
    return UserModule;
}

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
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
            },
            {
                path: 'publishers',
                loadChildren: loadPublishersModule
            },
            {
                path: 'user',
                // canActivate: [AuthGuardService],
                loadChildren: loadUserModule
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
