// Pool? SWIM IN DATABASES
// import ?
// await

// EcmaScript ES6, ES2025
// Node => WebJS + Wrapper
// CommonJS (require)
// ESM => ES Modules (import)

// import pg from 'pg'
const pg = require("pg");

const { Client } = pg;

const dbClient = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "jokes_feb17",
});

dbClient
  .connect()
  .then(() => console.log("Connected!"))
  .then(() => dbClient.query("SELECT * FROM jokes"))
  // .then(() => dbClient.query("SELECT NOW()"))
  .then((res) => console.log(res.rows))
  .catch((err) => console.log(err))
  .finally(() => dbClient.end());
