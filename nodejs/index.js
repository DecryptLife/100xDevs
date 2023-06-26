const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

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

function calcMul(counter) {
  var mul = 1;
  for (var i = 1; i <= counter; i++) {
    mul = mul * i;
  }

  return mul;
}

function handleFirstRequest(req, res) {
  // console.log(req.headers);
  var val = req.body.counter;

  var valSum = calcSum(val);
  var valMul = calcMul(val);

  var answer = { sum: valSum, mul: valMul };
  // if (val < 100000) {
  //   var sum = calcSum(val);
  //   var ans = "The sum is " + sum;
  //   res.send(ans);
  // } else {
  //   res.status(411).send("You have send a very huge number");
  // }

  res.status(200).send(answer);
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
  res.send();
}
// app.get("/handleSum", calcSum);

function started() {
  console.log(`Example app listening on port ${port}`);
}
function givePage(req, res) {
  res.send(`<head>
  <title>Hello from page</title>
</head>
<body>
  <b>hi there</b>
</body>
`);
}

function handSumRequest(req, res) {
  var counter = req.query.counter;
  var calSum = calcSum(counter);
  var ansObj = {
    sum: calSum,
  };

  res.send(ansObj);
}
app.get("/", givePage);
app.get("/handSum", handSumRequest);
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

// calcSum(100);
