const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { queryDB } = require("./db/db");
const { fetchAllAuthors, fetchAuthorById, insertAuthor } = require("./db/authorHelpers");
const { fetchAllJokes, fetchJokeById } = require("./db/jokeHelpers");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/authors", (req, res) => {
  fetchAllAuthors()
    .then((rows) => {
      return res.json(rows);
    })
    .catch((err) => res.json(err));
});

app.get("/api/authors/:authorId", (req, res) => {
  fetchAuthorById(req.params.authorId)
    .then((author) => {
      return res.json(author);
    })
    .catch((err) => res.json(err));
});

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((rows) => {
      return res.json(rows);
    })
    .catch((err) => res.json(err));
});

app.get("/api/jokes/:jokeId", (req, res) => {
  fetchJokeById(req.params.jokeId)
    .then((joke) => {
      return res.json(joke);
    })
    .catch((err) => res.json(err));
});

app.get("/authors/new", (req, res) => {
  return res.render("new-author");
});

app.post("/authors", (req, res) => {
  console.log(req.body);
  const { name, description, funny } = req.body;
  const isFunny = funny === "on";

  insertAuthor(name, description, isFunny)
    .then((newAuthor) => {
      return res.redirect(`/api/authors/${newAuthor.id}`);
    })
    .catch((err) => res.json(err));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
