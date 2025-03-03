// Net package vs HTTP package
const http = require("http")

const serverHandler = (request, response) => {

  console.log(request.url)
  response.writeHead(200, { 'Content-Type': 'text/html' })

  response.end("<h1>HELLO</h1><h2>How are you!??!?!</h2>")
}


const server = http.createServer(serverHandler)


server.listen(3000)



// http://google.com

// HTTP STATUS CODES
// 10x = Pending
// 20x = 200 OK, 201 Created, ... 
// 30x = 301 Redirect / 302 Redirect
// 40x = 404 Not Found, 403 Unauthorized, 418
// 50x = Server is mad (crash / error)