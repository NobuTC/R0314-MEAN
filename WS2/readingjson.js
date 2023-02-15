var http = require("http");
var fs = require("fs");
const PORT = 8080;
const filePath = "./dataset.json";

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });

    fs.readFile("sampledata2.json", "utf8", function (err, data) {
      if (err) {
        console.log(err);
      }
      const newPerson = {
        name: "John Doe",
        age: "52",
        company: "Laurea",
        address: "Ratatie 22",
      };

      // data: is a string
      //change string to array
      const peopleArray = JSON.parse(data);

      //add new person end of array
      peopleArray.push(newPerson);

      //remove first person from peoplearray
      peopleArray.shift();

      //make array to string
      const peopleString = JSON.stringify(peopleArray);

      //write the string to the file
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
