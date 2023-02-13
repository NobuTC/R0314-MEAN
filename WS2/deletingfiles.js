const fs = require("fs");

fs.unlink("./combiningFilesExample.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("deleting File successfully!");
});

//this throw away a txt!!
