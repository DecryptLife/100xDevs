const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  res.send("Hello World");
}

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.get("/", handleFirstRequest);
app.listen(port, started);

// function callbackFn(err, data) {
//   console.log(data);
// }
// fs.readFile("./a.txt", "utf-8", callbackFn);

function calcSum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) sum += i;

  console.log(sum);
}

calcSum(100);
