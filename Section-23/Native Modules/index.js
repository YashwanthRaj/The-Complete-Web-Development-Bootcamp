const fs = require("fs"); // Getting hold of the file system module

// This will create a file with the following contents
// fs.writeFile("message.txt", "Hello World from Node JS", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved successfully!!");
// });

// This is the code to read the contents
fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})