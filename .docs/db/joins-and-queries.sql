SELECT *
FROM book_authors AS ba
         INNER JOIN books b on ba.book_id = b.book_id
         INNER JOIN authors a on ba.author_id = a.author_id
WHERE b.book_id = 300;


select b.book_id,
       string_agg(a.author_name, ',') as author_names
from books b
         LEFT JOIN book_authors ba
                   on b.book_id = ba.book_id
         LEFT JOIN authors a
                   on ba.author_id = a.author_id
GROUP BY b.book_id;



select b.book_id,
       string_agg(g.genre_name, ',') as genre_names
from books b
         LEFT JOIN book_genres bg
                   on b.book_id = bg.book_id
         LEFT JOIN genres g
                   on bg.genre_id = g.genre_id
GROUP BY b.book_id;


select authors.author_id,
       count(*) books
from authors
         left outer join book_authors ba on authors.author_id = ba.author_id
group by authors.author_id;



select *
from books b
         left outer join v_book_ratings r on b.book_id = r.book_id;

select *
from lituralia.book_authors AS ba
         INNER JOIN lituralia.v_book_details AS b ON ba.book_id = b.book_id
         INNER JOIN lituralia.authors AS a ON ba.author_id = a.author_id



SELECT b.publisher_id,
       ROUND(AVG(rating), 2) avg_rating,
       COUNT(*)              ratings
FROM opinions o
         LEFT OUTER JOIN books AS b on o.book_id = b.book_id
GROUP BY b.publisher_id;



SELECT *
from opinions o
         LEFT OUTER JOIN books b on o.book_id = b.book_id
         LEFT OUTER JOIN publishers p on b.publisher_id = p.publisher_id
where b.publisher_id = 10;

SELECT *
from opinions o
        LEFT OUTER JOIN books b on o.book_id = b.book_id
        LEFT OUTER JOIN book_authors ba on b.book_id = ba.book_id
        LEFT OUTER JOIN authors a on ba.author_id = a.author_id
where a.author_id = 10