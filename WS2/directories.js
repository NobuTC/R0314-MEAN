// makes new file

const fs = require("fs");
const path = require("path");
const folderName = "randoj";
/*
fs.mkdir(path.join(__dirname, folderName), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Directory created succesfully!!!");
});
*/
// deleting file!

fs.rmdir(path.join(__dirname, folderName), () => {
  console.log("Directory removed succesfully!!!");
});
