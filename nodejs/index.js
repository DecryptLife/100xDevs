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

function createUser(req, res) {
  res.send("User created");
}

function updateName(req, res) {
  res.send("Name updated");
}

function deleteUser(req, res) {
  res.send("User deleted");
}
// app.get("/handleSum", calcSum);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.get("/handleSum", handleFirstRequest);
app.post("/createUser", createUser);
app.put("/updateName", updateName);
app.delete("/deleteUser", deleteUser);
app.listen(port, started);

// function callbackFn(err, data) {
//   console.log(data);
// }
// fs.readFile("./a.txt", "utf-8", callbackFn);

calcSum(100);
