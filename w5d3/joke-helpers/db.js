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

const queryDB = (queryString, queryArguments) => {
  return dbClient
  .connect()
  .then(() => dbClient.query(queryString, queryArguments))
  .then(res => res.rows.length === 1 ? res.rows[0] : res.rows)
}

module.exports = { dbClient, report, closeConnection, queryDB };
