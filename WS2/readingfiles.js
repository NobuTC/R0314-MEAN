var fs = require("fs");
//looping files and printing them in terminal

var files = ["example1.txt", "example2.txt"];

for (let index = 0; index < files.length; index++) {
  const element = files[index]; // example1.txt -- files[1]
  fs.readFile(element, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}
