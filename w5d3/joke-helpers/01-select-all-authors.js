// ***
// Name: "", they're (not) funny
// ***
// ***
// Name: "", they're (not) funny
// ***

const pg = require("pg");

const { Client } = pg;

const dbClient = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "jokes_feb17",
});

const report = (message) => {
  console.log(message)
}

const closeConnection = () => {
  console.log("DB Connection closed!")
  dbClient.end()
}

const queryDB = (queryString) => {
  return dbClient
  .connect()
  .then(() => dbClient.query(queryString))
  .then(res => res.rows)
}

const showAuthor = (authorObj) => {
  console.log(`
  ***
  Name: ${authorObj.name}, they're ${authorObj.funny ? "very" : "not"} funny
  ***
  `)
}

const showAllAuthors = (authorsList) => {
  authorsList.forEach(showAuthor)
}

queryDB("SELECT * FROM authors")
  .then(showAllAuthors)
  .catch(report)
  .finally(closeConnection);



  // if(1 === 5 && 2 === 2 && 3 === 4)