// STDIN => Standard input
// STDOUT => Standard output

// Create the output using writeFile

// Default package name: name of the folder
// Version: 1.0.0
// Entry point: first file in the current folder
// License: ISC

const packageObject = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  author: "",
  license: "ISC",
};

const readline = require("readline");
const fs = require("fs")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the name of the package? ", (data) => {
  packageObject.name = data

  rl.question("What is the version of the package? ", (data) => {
    packageObject.version = data

    rl.question("What is the description of the package? ", (data) => {
      packageObject.description = data

      rl.question("What is the entry point of the package? ", (data) => {
        packageObject.main = data

        const packageObjectJSON = JSON.stringify(packageObject)

        fs.writeFile("./package.json", packageObjectJSON, err => {
          if(err){
            return console.log("OH NO.", err)
          }
      
          console.log("File package.json has been created!")
        })
      });
    });
  });
});
