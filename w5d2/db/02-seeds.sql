INSERT INTO
  streaming_services (name, description, monthly_cost_in_cents)
VALUES
  ('Disney+', 'Its disney plus!', 999),
  ('Netflix', 'Its netflix!', 2099),
  ('Crave', 'Its crave!', 599)
;

INSERT INTO
  genres (name, description)
VALUES
  ('Anime', ''),
  ('Comedy', 'Comedy :D')
;

INSERT INTO
  shows (name, seasons)
VALUES
 ('Silicon Valley', 5),
 ('Friends', 10),
 ('Sakamoto Days', 1)
;

-- BRIDGE TABLES

INSERT INTO
  show_genres (show_id, genre_id)
VALUES
(1, 2),
(2, 2),
(3, 1),
(3, 2)
;

INSERT INTO
  show_streaming_services (show_id, streaming_service_id)
VALUES
(1, 2),
(2, 3),
(3, 1)
;