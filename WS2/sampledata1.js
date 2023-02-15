var http = require("http");
var fs = require("fs");
const PORT = 8080;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("sampledata1.json", "utf8", function (err, data) {
      // data: is a string
      // We want JSON, so that we can do data.something.something
      if (err) {
        console.log(err);
      }

      // Change String to JSON,
      // so now we can do jsonObject.something.somthing
      const jsonObject = JSON.parse(data);

      // Create a string that has HTML in it
      let peopleHtml = `<table border='1'>\n`;

      // We select the peoples array [person1, person2, person3]
      const people = jsonObject.Names.Peoples;

      // Loop through all persons
      // Add them to our html string, which is peopleHtml
      people.forEach((person) => {
        peopleHtml += `<tr>\n`;
        peopleHtml += `<td>${person.name}</td>\n`;
        peopleHtml += `<td>${person.age}</td>\n`;
        peopleHtml += `<td>${person.company}</td>\n`;
        peopleHtml += `<td>${person.address}</td>\n`;
        peopleHtml += `</tr>\n`;
      });

      // close the table
      peopleHtml += `</table>\n`;

      // Send this to browser
      response.end(peopleHtml);
    });
  })
  .listen(PORT);
