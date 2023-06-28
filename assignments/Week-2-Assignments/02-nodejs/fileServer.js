/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const pathToFolder = "./files";
const port = 3000;

app.use(bodyParser.json());

function fileList(req, res) {
  fs.readdir(pathToFolder, (err, files) => {
    if (err) {
      console.error("Error reading folder: ", err);
      return;
    }

    const ans = {
      files: files,
    };
    res.status(200).send(files);
  });
}
app.get("/files", fileList);

function fileContent(req, res) {
  console.log(req.params);
  const filename = req.params.filename;
  const pathToFile = path.join(__dirname, "files", filename);
  console.log(pathToFile);
  if (fs.existsSync(pathToFile)) {
    res.sendFile(pathToFile);
  } else {
    res.status(404).send("Not found");
  }
}

app.get("/file/:filename", fileContent);

function portStarted() {
  console.log(`Listening to ${port}`);
}
app.listen(port, portStarted);
module.exports = app;
