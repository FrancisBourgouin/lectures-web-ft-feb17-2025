// Require external resources
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv")
dotenv.config()

// Set up data + helpers
const generatedSalt = process.env.SALT;
const users = require("./data/users");
const generateUserHelpers = require("./helpers/userHelpers");
const { getUserByEmail, authenticateUser, createUser } = generateUserHelpers(
  users,
  generatedSalt
);

// Generate safe data

// Initialize my server
const app = express();
const port = 8080;
app.set("view engine", "ejs");

// Set up the middlewares
// Read from static files (css files, js files, etc)
app.use(express.static("public"));
// Parse the content of cookie string to a cookie object (Parsing/Rendering/Interpreting)
app.use(cookieParser());
// Encrypt / Decrypt the content of the "session" cookie
app.use(
  cookieSession({
    keys: [process.env.COOKIE_SESSION_KEY],
    name: "session",
  })
);
// Parse the content of the form body to a body object
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  console.log(users);
  return res.render("home");
});

// Secret route
app.get("/secret", (req, res) => {
  // const { email } = req.cookies;
  const { email } = req.session;

  const { error, user } = getUserByEmail(email);

  if (error) {
    return res.redirect("/login");
  }

  const templateVars = { user };

  return res.render("secret", templateVars);
});

// Login routes
app.get("/login", (req, res) => {
  // Show the login form
  return res.render("login");
});

app.post("/login", (req, res) => {
  // Authenticate, and give cookie if valid user
  // Redirect to /secret to see the secret

  const { email, password } = req.body;

  const { error, user } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/login");
  }

  // res.cookie("email", user.email);
  req.session.email = user.email;

  return res.redirect("/secret");
});

// Register route
app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/register", (req, res) => {
  const { error, user } = createUser(req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  // res.cookie("email", user.email);
  req.session.email = user.email;
  return res.redirect("/secret");
});

// Leaky route!

app.get("/users", (req, res) => {
  return res.json(users);
});

app.listen(port, () => {
  console.log("Server is ready and listening on port:", port);
});
