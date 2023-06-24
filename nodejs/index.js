const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  var calsum = calcSum(counter);
  var ans = "The sum is " + calsum;
  res.send(ans);
}

function middleware(req, res, next) {
  console.log("From inside middleware: " + req.headers.counter);
  res.send("Error from inside middleware");
  next();
}

// to register a middleware - every request that comes shoud go through this function
// app.use(middleware);

// middleware - extracts the body before going to the routes else the body becomes undefined
app.use(bodyParser.json());

function calcSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) sum += i;

  return sum;
}

function createUser(req, res) {
  var name = req.body.name;
  var age = req.body.age;

  res.send("User created: " + name + " is " + age + " years old");
}

function updateName(req, res) {
  res.send("Name updated");
}

function deleteUser(req, res) {
  res.send("User deleted");
}

function handleSumPost(req, res) {
  console.log(req.headers);
  var val = req.headers.counter;
  var sum = calcSum(val);
  var ans = "The sum is " + sum;
  res.send(ans);
}
// app.get("/handleSum", calcSum);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.get("/handleSum", handleFirstRequest);
app.post("/handleSum", handleSumPost);
app.post("/createUser", createUser);
app.put("/updateName", updateName);
app.delete("/deleteUser", deleteUser);
app.listen(port, started);

// function callbackFn(err, data) {
//   console.log(data);
// }
// fs.readFile("./a.txt", "utf-8", callbackFn);

calcSum(100);
