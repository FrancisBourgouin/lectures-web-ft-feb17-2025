// Basic express server wo/ EJS

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
};

// Hey server, in the event of a get request, that is asking for the url of "/", do the following:

const someHtml = `
<html>
  <body>
    <h1>Title!</h1>
    <h2>subtitle</h2>
    <p>lorem ipsum...</p>
  </body>
</html>
`

server.use(express.static('public'))

// server.get("/", (req, res) => {
//   return res.send(someHtml);
// });

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/admin", (req, res) => {
  return res.json(users[1]);
});

server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  return res.json(users[userId]);
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
