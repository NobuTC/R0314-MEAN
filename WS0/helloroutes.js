var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/helloworld") {
      response.write("<h2>U dud it</h2>");
    } else if (request.url === "/yoloo") {
      response.write("<h1>Yoooooooo</h1>");
    } else request.url === "/homepage";
    {
      response.write("<h1>homepage!!!</h1>");
    }

    response.end("</html>");
  })
  .listen(8086);

console.log("I am listening server 8086!");
