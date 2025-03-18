SELECT
  shows.*,
  genres.*
FROM shows
JOIN show_genres
ON shows.id = show_genres.show_id
JOIN genres
ON genres.id = show_genres.genre_id
;


SELECT
  shows.*,
  ARRAY_AGG(genres.name) AS genres
FROM shows
JOIN show_genres
ON shows.id = show_genres.show_id
JOIN genres
ON genres.id = show_genres.genre_id
GROUP BY shows.id
;

