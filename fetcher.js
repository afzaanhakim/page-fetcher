const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");

const path = args[1];
const url = args[0];

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // statuscode when response recieved
  console.log("body:", body); //HTML body of the homepage

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(
        `download and saved ${fs.statSync(path).size} bytes to ${path} `
      ); //logging message to the terminal when download is complete
      process.exit(); //exiting the process when complete
    }
  });
});
