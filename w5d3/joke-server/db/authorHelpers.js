const { dbClient } = require("./db");

const fetchAllAuthors = () => {
  return dbClient.query("SELECT * FROM authors").then((res) => res.rows);
};

const fetchAuthorById = (authorId) => {
  const queryStr = "SELECT * FROM authors WHERE id = $1";
  const queryArgs = [authorId];

  return dbClient.query(queryStr, queryArgs).then((res) => res.rows[0]);
};

const insertAuthor = (name, description, isFunny) => {
  const queryStr = `
    INSERT INTO
      authors (name, description, funny)
    VALUES
      ($1, $2, $3)
    RETURNING *
  `;

  const queryArgs = [name, description, isFunny]

  return dbClient.query(queryStr, queryArgs).then((res) => res.rows[0]);
}

module.exports = { fetchAllAuthors, fetchAuthorById, insertAuthor };
