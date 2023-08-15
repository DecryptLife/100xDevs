interface Circle {
  radius: number;
}

interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function renderShape(shape: Shape) {
  console.log("rendered");
}

function calculateArea(shape: Shape) {
  console.log("calculated area");
}

renderShape({
  radius: 10,
  width: 10,
  height: 10,
  side: 10,
});
