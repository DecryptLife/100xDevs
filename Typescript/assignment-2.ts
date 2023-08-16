function swap<T>(a: T, b: T) {
  console.log(`Before swapping a = ${a} b = ${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`Before swapping a = ${a} b = ${b}`);
}

swap<number>(12, 15);
swap<string>("Benson", "Thomas");
