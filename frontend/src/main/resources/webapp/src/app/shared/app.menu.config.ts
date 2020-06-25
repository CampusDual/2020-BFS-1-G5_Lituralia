import {MenuRootItem} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
    {id: 'home', name: 'HOME', icon: 'home', route: '/main/home'},
    {id: 'books', name: 'BOOKS', icon: 'book', route: '/main/books'},
    {id: 'authors', name: 'AUTHORS', icon: 'people', route: '/main/authors'},
    {id: 'publishers', name: 'PUBLISHERS', icon: 'business', route: '/main/publishers'},
    {id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes'}
];
