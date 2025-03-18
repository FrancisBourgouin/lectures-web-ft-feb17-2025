DROP TABLE IF EXISTS show_streaming_services;
DROP TABLE IF EXISTS show_genres;
DROP TABLE IF EXISTS streaming_services; 
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS shows;

CREATE TABLE streaming_services(
    id SERIAL PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    description TEXT,
    monthly_cost_in_cents INT
);
CREATE TABLE genres(
    id SERIAL PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE shows(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   name TEXT NOT NULL,
   seasons TEXT
);

-- Bridge tables


CREATE TABLE show_genres(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   show_id INT REFERENCES shows(id) ON DELETE CASCADE,
   genre_id INT REFERENCES genres(id) ON DELETE CASCADE
);

CREATE TABLE show_streaming_services(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   show_id INT REFERENCES shows(id) ON DELETE CASCADE,
   streaming_service_id INT REFERENCES streaming_services(id) ON DELETE CASCADE
);


-- id INT AUTO_INCREMENT

-- SERIAL => INT that auto-increments
-- TEXT => Text!
-- BOOLEAN => True / False
-- FLOAT => 5.5 
-- INT => 5
-- price_in_cents