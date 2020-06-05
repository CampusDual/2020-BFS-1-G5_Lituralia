import {MenuRootItem} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
    {id: 'home', name: 'HOME', icon: 'home', route: '/main/home'},
    {id: 'books', name: 'BOOKS', icon: 'book', route: '/main/books'},
    {id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes'}
];
