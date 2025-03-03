// HTTP Server w/ Routing
const http = require("http");

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

// /users => show all the users
// /users/1 => show the user with the id of 1

const serverHandler = (request, response) => {
  console.log(request.url);


  const firstParam = request.url.split("/")[1]
  const secondParam = request.url.split("/")[2]

  const user = users[secondParam]

  if (firstParam === "users" && !secondParam) {
    const parsedData = JSON.stringify(users);

    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(parsedData);
  }

  if (firstParam === "users" && user) {
    const parsedData = JSON.stringify(user);

    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(parsedData);
  }
  
  response.writeHead(404, { "Content-Type": "text/html" });
  return response.end("(╯°□°）╯︵ ┻━┻  HELLOOOOO");

};

const server = http.createServer(serverHandler);

server.listen(3000);
