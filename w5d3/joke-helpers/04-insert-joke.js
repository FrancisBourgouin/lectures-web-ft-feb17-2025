// *****************************
// Q:
// A:

// By: Author name
// *****************************

const { report, closeConnection, queryDB } = require("./db");

const queryString = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;

const queryArguments = [
  process.argv[2], // $1
  process.argv[3], // $2
  process.argv[4], // $3
  process.argv[5], // $4
];

queryDB(queryString, queryArguments)
  .then(console.log)
  .catch(report)
  .finally(closeConnection);

// app.post("/jokes", (req, res) => {
//   const {question, answer, rating, author_id} = req.body

//   queryDB([question, answer, rating, author_id])
// })
