var http = require("http");
const PORT = 8080;

//create a server object:
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!\n"); //write a response to the client
    response.end("This is the end"); //end the response
  })
  .listen(PORT); //the server object listens on port 8081
console.log(`I'm listening http://localhost:${PORT} server...`);

//Kirjoita terminaaliin:
// node name_of_the_file.js
//Siiten se kuuntele ja mene chormeen tarkistamaan näkyykö serverissä 8080
