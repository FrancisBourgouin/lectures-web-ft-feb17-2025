// Filesystem
// Interactions with the file system
const fs = require("fs");

// Act of creating a folder is asynchronous
// fs.mkdir("./output", (err) => {
//   if (err) {
//     return console.log("OH NO");
//   }

//   fs.writeFile("./output/test1.txt", "Hello! 😀", (err) => {
//     if (err) {
//       return console.log("OH NO", err);
//     }

//     return console.log("GREAT SUCCESS!");
//   });
//   return console.log("GREAT SUCCESS!");
// });


// READ THE CONTENT OF A FILE
// THEN, WRITE IT 10 TIMES IN ANOTHER FILE

fs.readFile("./source.txt", (err, data) => {
  if(err){
    return console.log("OH NO.", err)
  }

  let newData = ""
  for(let i = 0; i < 10; i++){
    newData += `\n ${data}`
  }

  fs.appendFile("./output.txt", newData, err => {
    if(err){
      return console.log("OH NO.", err)
    }

    console.log("File output.txt has been created!")
  })
})