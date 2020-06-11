select
       b.book_id,
       b.title,
       string_agg(a.author_name, ',') as author_names
from books b
         LEFT JOIN book_authors ba
                   on b.book_id = ba.book_id
         LEFT JOIN authors a
                   on ba.author_id = a.author_id
WHERE b.book_id = 20
GROUP BY b.book_id;

SELECT * FROM book_authors AS ba
    INNER JOIN books b on ba.book_id = b.book_id
    INNER JOIN authors a on ba.author_id = a.author_id;


