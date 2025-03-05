const express = require("express");
const { authenticateUser, fetchUserByEmail, createUser } = require("./helpers/thiefHelpers");
const thieves = require("./data/thiefData");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.use(cookieParser());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log(thieves)
  res.clearCookie("errorMessage"); // WHEN WELL SEND THE DATA BACK, GET RID OF THE ERROR COOKIE

  const { email, error } = req.cookies;

  const { data } = fetchUserByEmail(thieves, email);

  const templateVars = { thief: data, error };

  return res.render("index", templateVars);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, data } = authenticateUser(thieves, email, password);

  if (error) {
    res.cookie("errorMessage", error);
    return res.redirect("/");
  }

  res.cookie("email", data.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

app.get("/register", (req, res) => {
  const { email, errorMessage } = req.cookies;

  const { error } = fetchUserByEmail(thieves, email);

  // Why are we not checking just for the cookie
  if (!error) {
    return res.redirect("/");
  }

  const templateVars = { error: errorMessage };

  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {

  const {error, data} = createUser(thieves, req.body)

  if(error){
    res.cookie("errorMessage", error);
    return res.redirect("/register")
  }

  res.cookie("email", data.email)
  return res.redirect("/")
})

// app.post("/", (req,res) => {
//   // const longUrl = req.body.longUrl
//   // const shortUrl = req.body.shortUrl
//   // const description = req.body.description
//   // const userId = req.body.userId

//   const {longUrl, shortUrl, description, userId} = req.body

// })

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
