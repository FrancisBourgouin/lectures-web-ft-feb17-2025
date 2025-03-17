-- Basic select

SELECT * FROM authors;

-- Where


SELECT *
FROM authors
WHERE funny IS TRUE
;

SELECT name, description
FROM authors
WHERE funny IS TRUE
;

SELECT authors.name, authors.description
FROM authors
WHERE funny IS TRUE
;

-- Renaming fields

SELECT 
  jokes.*
  -- question AS first_part,
  -- answer AS second_part
FROM jokes
WHERE answer IS NOT NULL
AND rating >= 5
;

-- Filter out some results

-- Ordering results

-- Filter based of text

SELECT 
  jokes.*,
  LOWER(question) AS first_part
  -- answer AS second_part
FROM jokes
-- WHERE question LIKE 'What%'
-- WHERE question LIKE '% do %'
-- WHERE LOWER(question) LIKE 'what%' -- GENERIC SQL WAY
WHERE question ILIKE 'what%' -- MAGICAL POSTGRESQL WAY
ORDER BY rating ASC
LIMIT 2
;


-- Joining tables

SELECT * 
FROM jokes
-- JOIN authors
-- INNER JOIN authors
LEFT JOIN authors
-- RIGHT JOIN authors
-- FULL OUTER JOIN authors
ON jokes.author_id = authors.id
;


SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes
LEFT JOIN authors
ON jokes.author_id = authors.id
;

-- Potential problems when working with JavaScript

-- AGGREGATE FUNCTIONS

SELECT 
  author_id,
  AVG(rating), 
  MIN(rating), 
  MAX(rating) 
FROM jokes
GROUP BY author_id
HAVING AVG(rating) >= 5
;

SELECT 
  author_id
FROM jokes
GROUP BY author_id
HAVING AVG(rating) >= 5
;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes
LEFT JOIN authors
ON jokes.author_id = authors.id
WHERE author_id IN (
  SELECT author_id
  FROM jokes
  GROUP BY author_id
  HAVING AVG(rating) >= 4
)
;


-- View! Read-only table
DROP VIEW IF EXISTS jokes_from_cool_authors;
CREATE VIEW jokes_from_cool_authors AS (
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
  WHERE author_id IN (
    SELECT author_id
    FROM jokes
    GROUP BY author_id
    HAVING AVG(rating) >= 4
  )
);

-- AGGREGATES + Nested selects !


SELECT * FROM jokes_from_cool_authors WHERE question ILIKE 'what%';