// readFile("./a.txt", function (contents) {
//   console.log(contents);
// });

// function display() {
//   console.log("hello world");
// }

// setTimeout(display, 2 * 1000);

// // console.log("Hi There!");

// let counter = 0;
// for (let i = 0; i < 1000; i++) {
//   counter = counter + 1;
// }

// console.log(counter);

// Create a stop watch

let timer = 10;
function printTime() {
  console.clear();
  console.log(timer);
  timer = timer - 1;

  if (timer == 0) {
    console.clear();
    console.log("Time up!!!");
    clearInterval(clock);
  }
}

const clock = setInterval(printTime, 1 * 1000);
