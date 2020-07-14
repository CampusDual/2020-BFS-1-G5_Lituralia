import {MenuRootItem} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  // {id: 'home', name: 'HOME', icon: 'home', route: '/main/home'},
  {id: 'books', name: 'BOOKS', icon: 'book', route: '/main/books'},
  {id: 'authors', name: 'AUTHORS', icon: 'people', route: '/main/authors'},
  {id: 'genres', name: 'GENRES', icon: 'style', route: '/main/genres'},
  {id: 'publishers', name: 'PUBLISHERS', icon: 'business', route: '/main/publishers'},
  {id: 'timeline', name: 'TIMELINE', route: '/main/user/timeline', icon: 'timeline'},
  {id: 'mylist', name: 'MY_LIST', route: '/main/user/mylist', icon: 'favorites'},
  {
    id: 'lang_opts', name: 'LANGUAGES', icon: 'language', items: [
      {id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es'},
      {id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en'}
    ]
  },
  // {id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes'}
];
