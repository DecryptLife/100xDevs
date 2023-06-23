const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  var calsum = calcSum(counter);
  var ans = "The sum is " + calsum;
  res.send(ans);
}

function calcSum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) sum += i;
  return sum;
}

// app.get("/handleSum", calcSum);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.get("/handleSum", handleFirstRequest);
app.listen(port, started);

// function callbackFn(err, data) {
//   console.log(data);
// }
// fs.readFile("./a.txt", "utf-8", callbackFn);

calcSum(100);
