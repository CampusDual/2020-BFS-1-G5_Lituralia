-- BD Lituralia V-0.0.5

drop schema lituralia cascade;
create schema lituralia;


--ontimize tables

create table lituralia.ti18n
(
    id_i18n          integer generated always as identity,
    class_name       varchar(150),
    i18n_description varchar(250),
    constraint ti18n_pkey
        primary key (id_i18n)
);

create table lituralia.ti18n_value
(
    id_i18n_value integer generated always as identity,
    id_i18n       integer not null,
    key           varchar(250),
    es_es         varchar(10485760),
    en_us         varchar(10485760),
    gl_es         varchar(10485760),
    constraint ti18n_value_pkey
        primary key (id_i18n_value)
);

create table lituralia.trequest_statistics
(
    id_request_statistics integer generated always as identity,
    service_name          varchar(255),
    method_name           varchar(50),
    user_name             varchar(50),
    execution_date        date,
    execution_time        integer,
    method_params         varchar(5000),
    service_exception     varchar(5000),
    constraint trequest_statistics_pkey
        primary key (id_request_statistics)
);

create table lituralia.trole
(
    id_rolename         integer generated always as identity,
    rolename            varchar(255),
    xmlclientpermission varchar(10485760),
    constraint trole_pkey
        primary key (id_rolename)
);

create table lituralia.tserver_permission
(
    id_server_permission integer generated always as identity,
    permission_name      varchar(10485760),
    constraint tserver_permission_pkey
        primary key (id_server_permission)
);

create table lituralia.trole_server_permission
(
    id_role_server_permission integer generated always as identity,
    id_rolename               integer,
    id_server_permission      integer,
    constraint trole_server_permission_pkey
        primary key (id_role_server_permission),
    constraint fk_trole_server_permission
        foreign key (id_rolename) references lituralia.trole,
    constraint fk_tserver_permission
        foreign key (id_server_permission) references lituralia.tserver_permission
);

create table lituralia.tsetting
(
    id_setting      integer generated always as identity,
    setting_key     varchar(10485760),
    setting_value   varchar(10485760),
    setting_comment varchar(10485760),
    constraint tsetting_pkey
        primary key (id_setting)
);

create table lituralia.tuser
(
    user_              varchar(50) not null,
    password           varchar(50),
    name               varchar(50),
    surname            varchar(50),
    email              varchar(50),
    nif                varchar(50),
    birthdate          date,
    avatar             varchar,
    userblocked        timestamp,
    lastpasswordupdate timestamp default CURRENT_TIMESTAMP,
    firstlogin         boolean   default true,
    constraint tuser_pkey
        primary key (user_)
);

create table lituralia.tuser_preference
(
    id_user_preference integer generated always as identity,
    preference_name    varchar(150),
    user_login         varchar(150),
    preference_value   varchar(10485760),
    constraint tuser_preference_pkey
        primary key (id_user_preference)
);

create table lituralia.tuser_role
(
    id_user_role integer generated always as identity,
    id_rolename  integer,
    user_        varchar(50),
    constraint tuser_role_pkey
        primary key (id_user_role),
    constraint fk_trole
        foreign key (id_rolename) references lituralia.trole,
    constraint fk_tuser
        foreign key (user_) references lituralia.tuser
);


-- lituralia content
create table lituralia.publishers
(
    publisher_id   integer generated always as identity,
    publisher_name varchar,
    publisher_desc varchar(300),
    publisher_logo varchar,
    constraint publishers_pkey
        primary key (publisher_id)
);

create table lituralia.authors
(
    author_id       integer generated always as identity,
    author_name     varchar,
    author_birth    date,
    author_death    date,
    author_portrait varchar,
    author_bio      varchar,
    constraint authors_pkey
        primary key (author_id)
);

create table lituralia.genres
(
    genre_id   integer generated always as identity,
    genre_name varchar,
    genre_desc varchar,
    constraint genre_pkey
        primary key (genre_id)
);

create table lituralia.books
(
    book_id      integer generated always as identity,
    isbn         varchar(13),
    title        varchar,
    synopsis     varchar,
    publish_date date,
    cover        varchar,
    publisher_id integer,
    constraint books_pkey
        primary key (book_id),
    constraint books_publishers_publisher_id_fk
        foreign key (publisher_id) references lituralia.publishers
);

create table lituralia.opinions
(
    opinion_id     integer generated always as identity,
    rating         integer,
    review         varchar,
    opinion_create date,
    opinion_update date,
    book_id        integer,
    user_          varchar,
    constraint opinions_pkey
        primary key (opinion_id),
    constraint opinions_books_book_id_fk
        foreign key (book_id) references lituralia.books,
    constraint opinions_tuser_user__fk
        foreign key (user_) references lituralia.tuser
);

create table lituralia.book_genres
(
    book_genre_id integer generated always as identity,
    book_id       integer,
    genre_id      integer,
    constraint book_genres_pkey
        primary key (book_genre_id),
    constraint book_genres_books_book_id_fk
        foreign key (book_id) references lituralia.books,
    constraint book_genres_genre_genre_id_fk
        foreign key (genre_id) references lituralia.genres
);

create table lituralia.book_authors
(
    book_author_id integer generated always as identity,
    book_id        integer,
    author_id      integer,
    constraint book_authors_pkey
        primary key (book_author_id),
    constraint book_authors_books_book_id_fk
        foreign key (book_id) references lituralia.books,
    constraint book_authors_authors_author_id_fk
        foreign key (author_id) references lituralia.authors
);

create table lituralia.lists
(
    list_id     integer generated always as identity,
    list_name   varchar,
    list_public boolean default false,
    list_desc   date,
    list_create date,
    list_update integer,
    user_       varchar,
    constraint lists_pkey
        primary key (list_id),
    constraint lists_tuser_user__fk
        foreign key (user_) references lituralia.tuser
);

create table lituralia.list_books
(
    list_book_id integer generated always as identity,
    list_id      integer,
    book_id      integer,
    constraint list_books_pkey
        primary key (list_book_id),
    constraint list_books_lists_list_id_fk
        foreign key (list_id) references lituralia.lists,
    constraint list_books_books_book_id_fk
        foreign key (book_id) references lituralia.books
);

create table lituralia.notes
(
    note_id     integer generated always as identity,
    message     varchar,
    book_page   integer,
    note_create date,
    nota_update date,
    user_       varchar,
    book_id     integer,
    constraint notes_pkey
        primary key (note_id),
    constraint notes_tuser_user__fk
        foreign key (user_) references lituralia.tuser,
    constraint notes_books_book_id_fk
        foreign key (book_id) references lituralia.books
);

create table lituralia.statuses
(
    status_id   integer generated always as identity,
    status_name varchar,
    status_desc varchar,
    constraint states_pkey
        primary key (status_id)
);

create table lituralia.user_book_statuses
(
    user_book_state_id     integer generated always as identity,
    user_book_state_create date,
    user_book_state_update date,
    status_id              integer,
    user_                  varchar,
    book_id                integer,
    constraint user_book_state_pkey
        primary key (user_book_state_id),
    constraint user_book_state_states_state_id_fk
        foreign key (status_id) references lituralia.statuses,
    constraint user_book_state_tuser_user__fk
        foreign key (user_) references lituralia.tuser,
    constraint user_book_state_books_book_id_fk
        foreign key (book_id) references lituralia.books
);



CREATE OR REPLACE VIEW lituralia.v_book_ratings AS
(
SELECT book_id,
       ROUND(AVG(o.rating), 2) as avg_rating,
       COUNT(*)                as ratings
FROM opinions o
GROUP BY book_id
    );



CREATE OR REPLACE VIEW v_author_ratings AS
(
SELECT ba.author_id,
       ROUND(AVG(rating), 2) avg_rating,
       COUNT(*)              ratings
FROM opinions o
         LEFT OUTER JOIN book_authors ba on ba.book_id = o.book_id
GROUP BY ba.author_id
    );



CREATE OR REPLACE VIEW lituralia.v_book_details AS
(
select b.*,
       p.publisher_name,
       gn.genre_ids,
       gn.genre_names,
       an.author_ids,
       an.author_names,
       v.avg_rating,
       v.ratings
from books b
         LEFT OUTER JOIN
     v_book_ratings as v on v.book_id = b.book_id,
     publishers p,
     (select b.book_id,
             string_agg(cast(a.author_id as text), ',') as author_ids,
             string_agg(a.author_name, ',')             as author_names
      from books b
               LEFT JOIN book_authors ba
                         on b.book_id = ba.book_id
               LEFT JOIN authors a
                         on ba.author_id = a.author_id
      GROUP BY b.book_id) as an,
     (select b.book_id,
             string_agg(cast(g.genre_id as text), ',') as genre_ids,
             string_agg(g.genre_name, ',')             as genre_names
      from books b
               LEFT JOIN book_genres bg
                         on b.book_id = bg.book_id
               LEFT JOIN genres g
                         on bg.genre_id = g.genre_id
      GROUP BY b.book_id) as gn
where b.publisher_id = p.publisher_id
  and b.book_id = an.book_id
  and b.book_id = gn.book_id
    );


CREATE OR REPLACE VIEW v_author_details AS
(
select a.*,
       bc.books,
       o.ratings,
       o.avg_rating
from authors a,
     (select authors.author_id,
             count(*) books
      from authors
               left outer join book_authors ba on authors.author_id = ba.author_id
      group by authors.author_id) bc,
     v_author_ratings o
where a.author_id = bc.author_id
  and a.author_id = o.author_id
order by a.author_id
    );
