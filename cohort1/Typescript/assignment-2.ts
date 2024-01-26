function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const anst = swap("Benson", 1);
const ans1 = swap(1, 10);

console.log(anst);
console.log(ans1);
