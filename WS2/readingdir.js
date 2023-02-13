const fs = require("fs");
const { consumers } = require("stream");

fs.readdir(__dirname, (err, files) => {
  if (err) consolelog(err);
  else {
    console.log("\nCurrent directory filename");
    files.forEach((file) => {
      console.log(file);
    });
  }
});

fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
  console.log("\nCurrent directory files:");
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// this is how you print directory contents to the screen!
// shows "current directory files"
