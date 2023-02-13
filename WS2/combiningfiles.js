const fs = require("fs");

const data = "Hello, World\n";
const filePath = "./combiningFilesExample.txt";

fs.writeFile(filePath, data, (error) => {
  if (error) {
    console.error(`There is error while writing this ${filePath}`);
  } else {
    console.log(`Data is succesfully writed to this ${filePath}`);
  }

  const prefix = "1. I wrote this!\n";
  const suffix = "2. I wrote that!";

  fs.appendFile(filePath, prefix, (error) => {
    if (error) {
      console.error(`An error occurred while appending to ${filePath}:`, error);
    } else {
      console.log(`Prefix was successfully appended to ${filePath}.`);

      fs.appendFile(filePath, suffix, (error) => {
        if (error) {
          console.error(
            `An error occurred while appending to ${filePath}:`,
            error
          );
        } else {
          console.log(`Suffix was successfully appended to ${filePath}.`);
        }
      });
    }
  });
});
