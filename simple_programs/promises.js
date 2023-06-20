function medicineGet() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
}

medicineGet().then(function () {
  console.log("medicine 1 recieved");
});

const fs = require("fs");

function fileIsRead(content) {
  console.log(content);
}

fs.readFile("a.txt", "utf-8", fileIsRead);
