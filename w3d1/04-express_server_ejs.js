// Basic express server w/ EJS// Basic express server wo/ EJS

// Framework => A bunch of tools, but we need to use them in a proper way, guided by docs / maintainers
// Library => A bunch of tools, and we use them however we want

const express = require("express"); // Fetch the express package, and store in the variable
const server = express(); // express(), is doing the same work as http.createServer
const port = 3001; // specify the port that we listen to

// Why ports? Because we need a way to trade with overseas business partners
//

const users = {
  1: {
    id: 1,
    name: "Little Chicken",
    email: "pock@pock.com",
  },
  2: {
    id: 2,
    name: "Chickenator",
    email: "illbe@back.com",
  },
  3: {
    id: 3,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
  3: {
    id: 3,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
  4: {
    id: 4,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
  5: {
    id: 5,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
  6: {
    id: 6,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
  7: {
    id: 7,
    name: "Potato Master",
    email: "yukongoldisthebest@gmail.com",
  },
};

server.use(express.static("public"));
server.set("view engine", "ejs");

server.use((req, res, next) => {
  console.log(`Browser asked for: ${req.path} at ${new Date().toLocaleTimeString()}`)
  next()
})

server.get("/", (req, res) => {
  return res.render("home");
});

server.get("/users", (req, res) => {
  const templateName = "users"
  const templateVars = { users: Object.values(users) }

  return res.render(templateName, templateVars);
});

server.get("/users/admin", (req, res) => {
  const templateName = "user"
  const templateVars = { user: users[1] }

  return res.render(templateName, templateVars);
});

server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  const templateName = "user"
  const templateVars = { user: users[userId] }

  return res.render(templateName, templateVars);
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
