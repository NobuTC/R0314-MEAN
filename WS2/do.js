/*

// Read file using non-blocking, event driven way

var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync("example.txt");
console.log(data.toString());

for (var i = 0; i < 15; i++) {
  console.log("node just keeps on going while the file us being read...");
}

console.log("Program Ended");
*/

// Read file using the traditional blocking way

var fs = require("fs");

console.log("program started");

//We'll just give a name of the callback function, but define it later on
fs.readFile("example.txt", results);

for (var i = 0; i < 15; i++) {
  console.log("node just keeps on going while the file is being read...");
}

//Introduce a function to deal with fileread results
function results(err, data) {
  if (err) return console.error(err);
  console.log("Results of fileread");
  console.log(data.toString());
}

//differents for non-blocking, event driven way and the traditional blocking way differents
//it that example text goes differently places up and down and tradional will come error
//message too.
