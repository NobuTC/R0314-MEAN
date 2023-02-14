var http = require("http");
var fs = require("fs");
const PORT = 8080;

http
  .createServer(function (request, response) {
    if (request.url === "/contact") {
      fs.readFile("contact.html", "utf8", function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });
    } else if (request.url === "/plaintext") {
      fs.readFile("ohNo.txt", "utf8", function (err, data) {
        if (err) {
          console.log(err);
          return;
        }
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(data);
      });
    } else if (request.url === "/json") {
      fs.readFile("sampledata.json", "utf8", function (err, data) {
        if (err) {
          console.log(err);
          return;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(data);
      });
    } else {
      fs.readFile("frontpage.html", "utf8", function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });
    }
  })
  .listen(PORT);
