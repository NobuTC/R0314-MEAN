var http = require("http");
var fs = require("fs");
const PORT = 8080;
const filePath = "./dataset.json";

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });

    fs.readFile("sampledata2.json", "utf8", function (err, data) {
      // data: is a string
      // We want JSON, so that we can do data.something.something
      if (err) {
        console.log(err);
      }
      let newPerson = {
        name: "John Doe",
        age: "52",
        company: "Laurea",
        address: "Ratatie 22",
      };
      //change string to array
      const peopleArray = JSON.parse(data);
      peopleArray.push(newPerson);

      //remove first person from peoplearray
      peopleArray.shift();

      const peopleString = JSON.stringify(peopleArray);
      fs.writeFile(filePath, peopleString, (error) => {
        if (error) {
          console.error(`There is error writing this ${filePath}`);
        } else {
          console.log(`Data is succesfully writed to this ${filePath}`);
        }
      });

      // change array to string again
      response.end(peopleString);

      console.log(peopleArray);
    });
  })
  .listen(PORT);
