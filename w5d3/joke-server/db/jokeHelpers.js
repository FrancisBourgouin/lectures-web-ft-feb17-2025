const { dbClient } = require("./db");

const fetchAllJokes = () => {
  const queryString = `
    SELECT 
      jokes.*,
      authors.name,
      authors.description,
      authors.funny
    FROM jokes
    JOIN authors
    ON jokes.author_id = authors.id
    `;

  return dbClient.query(queryString).then((res) => res.rows);
};

const fetchJokeById = (jokeId) => {
  const queryStr = `
    SELECT 
      jokes.*,
      authors.name,
      authors.description,
      authors.funny
    FROM jokes
    JOIN authors
    ON jokes.author_id = authors.id
    WHERE jokes.id = $1
    `;
  const queryArgs = [jokeId];

  return dbClient.query(queryStr, queryArgs).then((res) => res.rows[0]);
};

module.exports = { fetchAllJokes, fetchJokeById };
